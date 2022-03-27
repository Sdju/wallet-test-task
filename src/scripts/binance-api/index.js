export default class BinanceApi {
  static ws = null;

  static waitConnect = null;

  static async connectToServer() {
    if (!this.waitConnect) {
      this.waitConnect = new Promise((resolve, reject) => {
        this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt');
        this.ws.addEventListener('open', resolve);
        this.ws.addEventListener('error', reject);
      });
    }

    return this.waitConnect;
  }

  static getBySymbol(symbol = 'BTCUSDT') {
    return fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
      .then((data) => data.json());
  }

  static async subscribeBySymbol(symbol = 'BTCUSDT', listener) {
    if (!this.ws) {
      await this.connectToServer();
    }
    this.ws.send(JSON.stringify({
      method: 'SUBSCRIBE',
      params: [
        `${symbol.toLowerCase()}@depth`,
      ],
      id: 1,
    }));
    this.ws.addEventListener('message', (message) => {
      const data = JSON.parse(message.data);
      if (data.e === 'depthUpdate') {
        listener(data);
      }
    });
  }
}
