// we connect to the device using a service running on the device that exposes a websocket to port 11472 aka 0x2ca3 (DJI's USB VID)

class LocalWebsocket {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.socket = null;
        this.isConnected = false;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.socket = new WebSocket(`ws://${this.host}:${this.port}`);

            this.socket.onopen = () => {
                this.isConnected = true;
                resolve();
            };

            this.socket.onerror = (error) => {
                reject(error);
            };
        });
    }

    disconnect() {
        if (this.socket) {
            this.isConnected = false;
            this.socket.close();
        }
    }

    async send(data) {
        return new Promise((resolve, reject) => {
            this.socket.send(data);

            this.socket.onmessage = (message) => {
                resolve(message.data);
            };

            this.socket.onerror = (error) => {
                reject(error);
            };
        });
    }

    async getClientVersion() {
        return await this.send('{"cmd":"get_client_version"}');
    }
}