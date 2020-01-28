const mongoose = require('mongoose');
const factory = require('../factorys');

const Book = mongoose.model('Book');

process.env.TEST_SUITE = 'spacetime-test';

describe('Unit test para Book Database', () => {
  describe('Criar um novo book', () => {
    let book;

    beforeEach(async () => {
      book = await factory.create('Book');
    });

    it('Deve criar um novo book', async () => {
      expect(await Book.findOne({ titulo: book.titulo })).not.toBeNull();
    });

    it('Deve dar erro, se book nao encontrado', async () => {
      expect(await Book.findOne({ titulo: 'nome_test' })).toBeNull();
    });
  });

  describe('Ler book', () => {
    let book;

    beforeEach(async () => {
      book = await factory.create('Book');
    });

    it('Deve ler um book por id', async () => {
      // eslint-disable-next-line no-underscore-dangle
      expect(await Book.findById(book._id)).not.toBeNull();
    });
  });
});
