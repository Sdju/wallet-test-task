export default class BinanceApi {
  static getBySymbol(symbol = 'BTCUSDT') {
    return fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`).then((data) => data.json());
  }
}
