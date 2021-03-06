module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      birthday: `${day}/${month}`,
      iso: `${year}-${month}-${day}`,
      format: `${day}/${month}/${year}`,
    }; //iso type
  },

  formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  },
};
