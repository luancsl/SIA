const request = require('supertest');
const faker = require('faker');
const app = require('../../src/app');

process.env.TEST_SUITE = 'spacetime-test';
let bookTestId;
describe('Teste unitario para Api de livro', () => {
  describe('Crud de livro', () => {
    it('Deve criar um novo livro', async () => {
      const response = await request(app)
        .post('/book')
        .send({
          titulo: faker.name.title(),
          subtitulo: faker.name.title(),
          descricao: faker.lorem.paragraph(),
          authors: faker.random.arrayElement(),
          dtPublicacao: faker.date.recent(),
          categoria: faker.random.arrayElement(),
          numPag: faker.random.number(),
          pais: faker.address.country(),
          tags: faker.random.arrayElement(),
        });
      // eslint-disable-next-line no-underscore-dangle
      bookTestId = response.body._id;
      expect(response.status).toBe(200);
    });
    it('Deve buscar um determinado livro', async () => {
      const response = await request(app)
        // eslint-disable-next-line no-underscore-dangle
        .get(`/book/${bookTestId}`);
      expect(response.status).toBe(200);
    });
    it('Deve modificar um determinado livro', async () => {
      const response = await request(app)
        .put(`/book/${bookTestId}`)
        .send({
          titulo: faker.name.title(),
          subtitulo: faker.name.title(),
          descricao: faker.lorem.paragraph(),
          authors: faker.random.arrayElement(),
          dtPublicacao: faker.date.recent(),
          categoria: faker.random.arrayElement(),
          pais: faker.address.country(),
          tags: faker.random.arrayElement(),
        });
      expect(response.status).toBe(202);
    });
    it('Deve excluir um determinado livro', async () => {
      const response = await request(app)
        .delete(`/book/${bookTestId}`);
      expect(response.status).toBe(204);
    });
  });
});
