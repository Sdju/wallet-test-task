export default class BinanceApi {
  static ws = null;

  static waitConnect = null;

  static async connectToServer(symbol) {
    if (!this.waitConnect) {
      this.waitConnect = new Promise((resolve, reject) => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}`);
        ws.addEventListener('open', () => resolve(ws));
        ws.addEventListener('error', reject);
      });
    }

    return this.waitConnect;
  }

  static getBySymbol(symbol) {
    return fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
      .then((data) => data.json());
  }

  static async subscribeBySymbol(symbol, listener) {
    const ws = await this.connectToServer(symbol);
    ws.send(JSON.stringify({
      method: 'SUBSCRIBE',
      params: [
        `${symbol.toLowerCase()}@depth`,
      ],
      id: 1,
    }));

    ws.addEventListener('message', (message) => {
      const data = JSON.parse(message.data);
      if (data.e === 'depthUpdate') {
        listener(data);
      }
    });

    return () => {
      ws.close();
    };
  }
}
