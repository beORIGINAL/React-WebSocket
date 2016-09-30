export default class WebSocketProvider {
    constructor (host) {
        if (!host) {
            throw new Error('No host provided for new WebSocket connection.');
        }
        this.host = host;
        this.socket = new WebSocket(host);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = () => console.info('Connection closed!');
        this.socket.onerror = (error) => console.error(error);
    }
    
    onOpen () {
        console.info('Connection opened!');
        const loginMessage = JSON.stringify({
            $type: config.messageTypes.login,
            username: config.credentials.username,
            password: config.credentials.password
        });
        const tablesSubscribeMessage = JSON.stringify({
            $type: config.messageTypes.subscribeTables
        });
        
        this.ws.send(loginMessage);
        this.ws.send(tablesSubscribeMessage);
    }
    
    onMessage (event) {
        const data = JSON.parse(event.data);
        if (data && data.$type && data.$type in this.handlers) {
            this.handlers[data.$type](data);
        } else {
            console.info('Unhandled message:', event, data);
        }
    }
    
    on (type, handler) {
        this.handlers[type] = handler;
    }
    
    off (type) {
        delete this.handlers[type];
    }
}
