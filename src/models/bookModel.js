const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema(
  {
    user_id: { required: true, type: Schema.Types.ObjectId },
    titulo: { required: true, type: String },
    descricao: { required: false, type: String },
    autores: [{ required: false, type: String }],
    dtPublicacao: { required: false, type: String },
    numPag: { required: false, type: Number },
    categoria: [{ required: false, type: String }],
    pais: { required: false, type: String, default: 'BR' },
    tags: [{ required: false, type: String }],
    aluguel: { required: false, type: Boolean, default: false },
    isbn: { index: { unique: true }, required: true, type: Number },
    valor: { required: true, type: Number },
    disponivel: { required: true, type: Boolean, default: true},
    estado: {
      tempUsoValue: { required: false, type: Number, default: 0 },
      rAValue: { required: false, type: Number, default: 0 },
      pagFaltantesValue: { required: false, type: Number, default: 0 },
    },
    capaLivro: { require: true, type: String },
    fotosLivro: [{ require: false, type: String }],
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

module.exports = mongoose.model('Book', bookModel);
