const currencyFormat = new Intl.NumberFormat('pr-br', {
  style: 'currency',
  currency: 'BRL',
});

export default class CurrencyManager {
  static format(value) {
    return currencyFormat.format(value);
  }
}
