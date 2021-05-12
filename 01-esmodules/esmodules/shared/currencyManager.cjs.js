// in this case, the variable isn't global.
const currencyFormat = new Intl.NumberFormat('pr-br', {
  style: 'currency',
  currency: 'BRL',
});

//this doesn't work in the browser
module.exports = class CurrencyManager {
  static format(value) {
    return currencyFormat.format(value);
  }
};
