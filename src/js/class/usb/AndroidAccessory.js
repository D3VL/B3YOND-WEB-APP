const UsbBase = require("./BaseUsb");

// this is used to communicate with the android app wrapper, as it uses AOA.

const injectedFunctions = ["accessoryBridgeConnect", "accessoryBridgeRequestDevice", "accessoryBridgeWrite", "accessoryBridgeRead"]

class AndroidAccessory extends UsbBase {
    constructor(filters = []) {
        super(filters);
        if (navigator.userAgentData.platform !== "Android") throw new Error("Not supported");
        // check that the injected functions are available
        for (const func of injectedFunctions) {
            if (typeof window[func] !== "function") throw new Error(`Function ${func} not available`);
        }
    }

    async requestDevice() {
        const device = await accessoryBridgeRequestDevice();
        return device;
    }

    async connect(device) {

    }
}

module.exports = AndroidAccessory;