

class UsbBase {

    constructor(filters = []) {
        this.listeners = [];
        this.filters = filters;
    }

    isAvailable() {
        return false;
    }

    async requestDevice() {
        return [];
    }

    async grantedDevices() {
        return [];
    }

    async connect() {
        throw new Error("Not supported");
    }

    async write(data) {
        // if (this.session) {
        //     this.session.write(transmit);
        // }
        throw new Error("Not supported");
    }

    async linkSession(session) {
        console.log("Linking session");
        this.session = session;
        this.on('data', (data) => {
            try {
                this.session.receive(data);
            } catch (error) {
                console.error(error);
            }
        });
    }

    // super simple event emitter
    on(event, callback) {
        if (!event || !callback) throw new Error("Invalid arguments");
        this.listeners.push({ event, callback, once: false, id: this.listeners.length });
    }

    _emit(event, data = {}) {
        if (!event || !this.listeners) return;

        for (const listener of this.listeners) {
            try {
                if (listener.event === event) listener.callback(data);
            } catch (error) {
                console.error(error);
            }
        }

        return Promise.resolve();
    }
}

module.exports = UsbBase;