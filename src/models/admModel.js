require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const admModel = new Schema(
  {
    username: { index: true, required: true, type: String },
    nome: { required: true, type: String },
    sobrenome: { required: true, type: String },
    email: { required: true, type: String },
    password_hash: { required: true, type: String },
    endereco: [
      {
        rua: { required: true, type: String },
        numero: { required: true, type: String },
        complemento: { type: String },
        cidade: { required: true, type: String },
        bairro: { required: true, type: String },
        estado: { required: true, type: String },
        cep: { required: true, type: String },
      },
    ],
    locations: [
      {
        lat: { type: String },
        long: { type: String },
      },
    ],
    tipo_usuario: { required: true, type: String },
    cpf: { required: true, type: String },
    telefone: [{ required: true, type: String }],
    rules: { required: true, type: String },
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

// eslint-disable-next-line func-names
admModel.virtual('password').set(function (v) {
  this.password_hash = v;
});

admModel.post('validate', async (doc) => {
  // eslint-disable-next-line no-param-reassign
  doc.password_hash = await bcrypt.hash(doc.password_hash, 8);
});

// eslint-disable-next-line func-names
admModel.methods.isValidPassword = async function (password) {
  const adm = this;

  const compare = await bcrypt.compare(password, adm.password_hash);

  return compare;
};

// calcula o tokem para objetos do tipo administrador
admModel.methods.generateToken = function f() {
  const adm = this;
  // eslint-disable-next-line no-underscore-dangle
  const body = { id: adm._id, email: adm.email, tipo_usuario: adm.tipo_usuario };

  return jwt.sign({ adm: body }, process.env.jwtSecret);
};

module.exports = mongoose.model('Adm', admModel);
