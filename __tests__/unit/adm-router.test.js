const request = require('supertest');
const factory = require('../factorys');
const app = require('../../src/app');

process.env.TEST_SUITE = 'spacetime-test';

describe('Unit test para Admin API', () => {
  describe('Criar um novo adm', () => {
    let adm;

    beforeEach(async () => {
      adm = await factory.build('Adm');
    });

    it('Deve criar um novo adm', async () => {
      const response = await request(app)
        .post('/adm')
        .set('Authorization', `Bearer ${adm.generateToken()}`)
        .send(adm);
      expect(response.status).toBe(200);
    });
    it('Deve buscar um determinado adm', async () => {
      const response = await request(app)
        // eslint-disable-next-line no-underscore-dangle
        .get(`/adm/${adm._id}`)
        .set('Authorization', `Bearer ${adm.generateToken()}`);
      expect(response.status).toBe(200);
    });
    it('Deve modificar um determinado adm', async () => {
      adm.nome = 'modify';
      const response = await request(app)
        // eslint-disable-next-line no-underscore-dangle
        .put(`/adm/${adm._id}`)
        .set('Authorization', `Bearer ${adm.generateToken()}`)
        .send(adm);
      expect(response.status).toBe(202);
    });
    it('Deve excluir um determinado adm', async () => {
      // eslint-disable-next-line no-underscore-dangle
      const response = await request(app)
        // eslint-disable-next-line no-underscore-dangle
        .delete(`/adm/${adm._id}`)
        .set('Authorization', `Bearer ${adm.generateToken()}`);
      expect(response.status).toBe(204);
    });
  });
});
