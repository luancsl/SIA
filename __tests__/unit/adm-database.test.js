const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const factory = require('../factorys');

const Adm = mongoose.model('Adm');

process.env.TEST_SUITE = 'spacetime-test';

describe('Unit test para Admin Database', () => {
  describe('Criar um novo adm', () => {
    let adm;

    beforeEach(async () => {
      adm = await factory.create('Adm');
    });

    it('Deve criar um novo adm', async () => {
      expect(await Adm.findOne({ nome: adm.nome })).not.toBeNull();
    });

    it('Deve dar erro, se adm nao encontrado', async () => {
      expect(await Adm.findOne({ nome: 'nome_test' })).toBeNull();
    });
  });

  describe('Ler adm', () => {
    let adm;

    beforeEach(async () => {
      adm = await factory.create('Adm');
    });

    it('Deve ler um adm por id', async () => {
      // eslint-disable-next-line no-underscore-dangle
      expect(await Adm.findById(adm._id)).not.toBeNull();
    });

    /* it('Deve dar erro, se adm nao lido por id', async () => {
      expect(await Adm.findById('23123232')).toThrowError();
    }); */
  });
});

describe('Password encrypt', () => {
  let adm;
  beforeEach(async () => {
    adm = await factory.create('Adm', {
      password: '123456',
    });
  });

  it('Deve encriptar o adm password', async () => {
    const consult = await Adm.findOne({ nome: adm.nome });
    expect(await bcrypt.compare('123456', consult.password_hash)).toBe(true);
  });
});
