require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userModel = new Schema(
  {
    username: { index: true, unique: true, required: true, type: String },
    nome: { required: true, type: String },
    sobrenome: { required: true, type: String },
    email: { required: true, type: String },
    password_hash: { required: true, type: String },
    extern_id: { type: String },
    bank_account: {
      bank_code: { type: String },
      agencia: { type: String },
      agencia_dv: { type: String },
      conta: { type: String },
      conta_dv: { type: String },
      type: { type: String, default: 'conta_corrente'},
      document_number: { type: String },
      legal_name: { type: String },
    },
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
    config: {
      distance: { type: Number, default: 60 }
    },
    locations: { type: [Number], default: [0, 0] },
    tipo_usuario: { required: true, type: String },
    cpf: { required: true, index: true, unique: true, type: String },
    telefone: [{ required: true, type: String }],
    rules: { required: true, type: String },
    usuario_ativo: { required: true, type: Boolean, default: false },
    foto_usuario: { required: false, type: String },
    foto_documento: [{ required: false, type: String }],
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

userModel.index({ "locations": "2d" });

// eslint-disable-next-line func-names
userModel.virtual('password').set(function (v) {
  this.password_hash = v;
});

userModel.post('validate', async (doc) => {
  // eslint-disable-next-line no-param-reassign
  doc.password_hash = await bcrypt.hash(doc.password_hash, 8);
});

// eslint-disable-next-line func-names
userModel.methods.isValidPassword = async function (password) {
  const user = this;

  const compare = await bcrypt.compare(password, user.password_hash);

  return compare;
};

// calcula o tokem para objetos do tipo usuario
userModel.methods.generateToken = function f() {
  const user = this;
  // eslint-disable-next-line no-underscore-dangle
  const body = { id: user._id, email: user.email, tipo_usuario: user.tipo_usuario };

  return jwt.sign({ adm: body }, process.env.jwtSecret);
};

module.exports = mongoose.model('User', userModel);
