const factoryGirl = require('factory-girl');
const faker = require('faker');

const { factory } = factoryGirl;
const adapter = new factoryGirl.MongooseAdapter();
factory.setAdapter(adapter);

const Adm = require('../src/models/admModel');
const User = require('../src/models/userModel');
const Book = require('../src/models/bookModel');

// Adminstrator factory
factory.define('Adm', Adm, {
  username: faker.internet.userName(),
  nome: faker.name.firstName(),
  sobrenome: faker.name.lastName(),
  email: faker.internet.email(),
  password: '123456',
  endereco: [
    {
      rua: faker.address.streetName(),
      numero: faker.address.streetPrefix(),
      complemento: 'casa',
      cidade: faker.address.city(),
      bairro: faker.address.citySuffix(),
      estado: faker.address.state(),
      cep: faker.address.zipCode(),
    },
  ],
  locations: [
    {
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    },
  ],
  tipo_usuario: 'adm',
  cpf: faker.random.number(),
  telefone: faker.phone.phoneNumber(),
  rules: faker.random.alphaNumeric(),
});

// User factory
factory.define('User', User, {
  username: faker.internet.userName(),
  nome: faker.name.firstName(),
  sobrenome: faker.name.lastName(),
  email: faker.internet.email(),
  password: '123456',
  endereco: [
    {
      rua: faker.address.streetName(),
      numero: faker.address.streetPrefix(),
      complemento: 'casa',
      cidade: faker.address.city(),
      bairro: faker.address.citySuffix(),
      estado: faker.address.state(),
      cep: faker.address.zipCode(),
    },
  ],
  locations: [
    {
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    },
  ],
  tipo_usuario: 'default',
  cpf: faker.random.number(),
  telefone: faker.phone.phoneNumber(),
  rules: faker.random.alphaNumeric(),
  ativo: faker.random.boolean(),
});

// Book factory
factory.define('Book', Book, {
  titulo: faker.name.title(),
  subtitulo: faker.name.title(),
  descricao: faker.lorem.paragraph(),
  authors: faker.random.arrayElement(),
  dtPublicacao: faker.date.recent(),
  categoria: faker.random.arrayElement(),
  pais: faker.address.country(),
  tags: faker.random.arrayElement(),
  numPag: faker.random.number(),

});

module.exports = factory;
