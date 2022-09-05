const UsbBase = require("./BaseUsb");

// this was using private members, but that's not supported with vue3 proxies 🙄
// read -> https://github.com/tc39/proposal-class-fields/issues/106

class Bulk extends UsbBase {
    constructor(filters = [
        { usbVendorId: 0x2CA3 },
    ]) {
        super(filters);

        if (!navigator.usb) throw new Error("WebUSB not supported");

        this.device = null;

        this.readStream = null;
        this.writeStream = null;

        this.doTransfer = true;
    }

    // https://github.com/o-gs/dji-firmware-tools/blob/08ccc8d84b3776f53a27a9d220fcb943734a8284/comm_serialtalk.py#L143
    getDumlInterface(interfaces) {
        const foundInterface = interfaces.filter(iface => {
            return iface.alternate.endpoints.some(endpoint => {
                return (endpoint.endpointNumber === 5 && endpoint.direction === "in")
            })
        })
        return foundInterface[0] || null;
    }

    isAvailable() {
        return this.device !== null;
    }

    async requestDevice() {
        const device = await navigator.usb.requestDevice({ filters: this.filters });
        return device;
    }

    async grantedDevices() {
        const devices = await navigator.usb.getDevices({ filters: this.filters });
        return devices;
    }

    async connect(device) {
        try {
            await device.open();
            await device.selectConfiguration(1);

            let iface = this.getDumlInterface(device.configurations[0].interfaces);
            if (!iface) {
                throw new Error("Could not find DUML interface");
            }

            this.readStream = iface.alternate.endpoints.find(endpoint => endpoint.direction === 'in');
            this.writeStream = iface.alternate.endpoints.find(endpoint => endpoint.direction === 'out');

            // sometimes, we can't claim the interface, this is either because it's already claimed or it's not the WinUSB driver on windows!
            let hasClaimedInterface = false;
            setTimeout(() => {
                if (!hasClaimedInterface) throw new Error("Could not claim interface");
            }, 1000);

            await device.claimInterface(iface.interfaceNumber);
            hasClaimedInterface = true;

            this._emit("connected", { device });

            await device.selectAlternateInterface(iface.interfaceNumber, iface.alternate.alternateSetting);

            this.device = device;

            this.readLoop();

        } catch (error) {
            throw error;
        }
    }

    async write(data) {
        if (!this.device) throw new Error("Not connected");
        if (!this.writeStream) throw new Error("Write stream not available");

        await this.device.transferOut(this.writeStream.endpointNumber, data);
    }

    async readLoop() {
        if (!this.doTransfer) return;
        try {
            const result = await this.device.transferIn(this.readStream.endpointNumber, this.readStream.packetSize);

            if (result.status === 'stall') {
                console.warn('Endpoint stalled. Clearing.');
                await this.device.clearHalt('in', this.readStream.endpointNumber);
            }

            if (result.data.byteLength > 0) {
                // console.log("emit data", result.data);
                this._emit("data", new Uint8Array(result.data.buffer));
            }

            // console.info("read", toHexString(new Uint8Array(result.data.buffer)));

            return this.readLoop();
        } catch (error) {
            this._emit("error", error);
        }
    }
}

module.exports = Bulk;