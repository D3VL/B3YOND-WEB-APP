const UsbBase = require("./BaseUsb");


class Serial extends UsbBase {
    constructor(filters = [
        { usbVendorId: 0x2CA3 },
    ]) {
        super(filters);

        if (!navigator.serial) throw new Error("WebSerial not supported");

        this.port = null;

        this.readStream = null;
        this.writeStream = null;
    }

    isAvailable() {
        return this.port !== null;
    }

    async requestDevice() {
        const port = await navigator.serial.requestPort({ filters: this.filters });
        return port;
    }

    async grantedDevices() {
        const ports = await navigator.serial.getPorts({ filters: this.filters });
        return ports;
    }

    async connect(port) {
        try {

            await port.open({ baudRate: 115200 });
            this._emit("connected", { port });
            this.port = port;

            if (port.readable && port.writable) {
                this.port = port
                this.readStream = this.port.readable.getReader();
                this.writeStream = this.port.writable.getWriter();
            } else {
                throw new Error("Could not get reader/writer");
            }

            this.readLoop();

        } catch (error) {
            throw error;
        }

    }

    async write(data) {
        if (!this.port) throw new Error("Not connected");
        if (!this.writeStream) throw new Error("Write stream not available");

        this.writeStream.write(data);

        return Promise.resolve();
    }

    async readLoop() {
        try {
            while (true) {
                const { data, done } = await this.readStream.read();

                if (done) {
                    this.readStream.releaseLock();
                    break;
                }

                if (data) this._emit("data", data);
            }
        } catch (error) {
            this._emit("error", error);
            this.readLoop();
        } finally {
            this.readStream.releaseLock();
        }
    }


}

module.exports = Serial;