const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const factory = require('../factorys');

const User = mongoose.model('User');

process.env.TEST_SUITE = 'spacetime-test';

describe('Teste unitario para interação com o banco de dados', () => {
  describe('Criar um novo adm', () => {
    let user;

    beforeEach(async () => {
      user = await factory.create('User');
    });

    it('Deve criar um novo usuário', async () => {
      expect(await User.findOne({ nome: user.nome })).not.toBeNull();
    });

    it('Deve dar erro, se o usuário não for encontrado', async () => {
      expect(await User.findOne({ nome: 'nome_test' })).toBeNull();
    });
  });

  describe('Buscar usuário', () => {
    let user;

    beforeEach(async () => {
      user = await factory.create('User');
    });

    it('Deve buscar um usuário pela id', async () => {
      // eslint-disable-next-line no-underscore-dangle
      expect(await User.findById(user._id)).not.toBeNull();
    });
  });
});

describe('Password encrypt', () => {
  let user;
  beforeEach(async () => {
    user = await factory.create('User', {
      password: '123456',
    });
  });

  it('Deve encriptar o campo password de administrador', async () => {
    const consult = await User.findOne({ nome: user.nome });
    expect(await bcrypt.compare('123456', consult.password_hash)).toBe(true);
  });
});
