(() => {
  const currencyFormat = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  class CurrencyManager {
    static format(value) {
      return currencyFormat.format(value);
    }
  }

  window.CurrencyManager = CurrencyManager;
})();
