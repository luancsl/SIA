require('../models/bookModel');

const Repository = require('../repositories/bookRepository');

function bookController() {}

bookController.prototype.post = async (req, res) => {
  const resultado = await new Repository().create(req.body);
  res.status(200).send(resultado);
};

bookController.prototype.put = async (req, res) => {
  const resultado = await new Repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

bookController.prototype.get = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().readAll(dado);
  res.status(200).send(resultado);
};

bookController.prototype.getById = async (req, res) => {
  const resultado = await new Repository().readById(req.params.id);
  res.status(200).send(resultado);
};

bookController.prototype.delete = async (req, res) => {
  const resultado = await new Repository().delete(req.params.id);
  res.status(204).send(resultado);
};

module.exports = bookController;
