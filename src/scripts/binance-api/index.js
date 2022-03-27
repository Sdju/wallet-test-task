export default class BinanceApi {
  static getBySymbol(symbol) {
    return fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
      .then((data) => data.json());
  }

  static async subscribeBySymbol(symbol, listener) {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}`);

    await new Promise((resolve, reject) => {
      ws.addEventListener('open', () => resolve(ws));
      ws.addEventListener('error', reject);
    });

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
