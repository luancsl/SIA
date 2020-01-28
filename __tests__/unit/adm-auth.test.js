const request = require('supertest');
const factory = require('../factorys');
const app = require('../../src/app');

describe('Autenticacao Adm', () => {
  it('Deve autenticar com credenciais validas', async () => {
    const adm = await factory.create('Adm', {
      password: '123123',
    });

    const response = await request(app)
      .post('/adm/login')
      .send({
        username: adm.username,
        password: '123123',
      });

    expect(response.status).toBe(202);
  });

  it('Não deve autenticar com credenciais inválidas', async () => {
    const adm = await factory.create('Adm', {
      password: '123123',
    });

    const response = await request(app)
      .post('/adm/login')
      .send({
        username: adm.username,
        password: '123126',
      });

    expect(response.status).toBe(401);
  });

  it('Deve retornar token jwt quando autenticado', async () => {
    const adm = await factory.create('Adm', {
      password: '123123',
    });

    const response = await request(app)
      .post('/adm/login')
      .send({
        username: adm.username,
        password: '123123',
      });
    expect(response.body).toHaveProperty('token');
  });

  it('Deve ser capaz de acessar rotas privadas quando autenticado', async () => {
    const adm = await factory.create('Adm', {
      password: '123123',
    });

    const response = await request(app)
      .get('/adm')
      .set('Authorization', `Bearer ${adm.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it('Não deve ser possível acessar rotas privadas sem token jwt', async () => {
    const response = await request(app).get('/adm');

    expect(response.status).toBe(401);
  });

  it('Não deve poder acessar rotas privadas com token jwt inválido', async () => {
    const response = await request(app)
      .get('/adm')
      .set('Authorization', 'Bearer 123123');

    expect(response.status).toBe(401);
  });
});
