const Encrypter = require('../services/encrypter');


const Tools = {

  decrypt_credit_card: (dado) => {
    dado.card_number = Encrypter.decrypt(dado.card_number);
    dado.card_expiration_date = Encrypter.decrypt(dado.card_expiration_date);
    dado.card_holder_name = Encrypter.decrypt(dado.card_holder_name);
    dado.card_cvv = Encrypter.decrypt(dado.card_cvv);
    return dado;
  },
  get_card_last_digits: (dado) => {
    const result = dado.substr(-4);
    return result;
  },
  get_card_first_digits: (dado) => {
    const result = dado.substr(0, 4);
    return result;
  },


}

module.exports = Tools;