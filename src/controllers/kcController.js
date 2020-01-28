require('../models/kcModel');
const Repository = require('../repositories/kcRepository');

function KcController() { }

KcController.prototype.post = async (req, res) => {
  const resultado = await new Repository().create(req.body);
  res.status(200).send(resultado);
};

KcController.prototype.put = async (req, res) => {
  const resultado = await new Repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

KcController.prototype.get = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().readAll(dado);
  res.status(200).send(resultado);
};

KcController.prototype.getById = async (req, res) => {

  let resultado = await new Repository().readById(req.params.id);

  res.status(200).send(resultado);
};

KcController.prototype.delete = async (req, res) => {
  const resultado = await new Repository().delete(req.params.id);
  res.status(204).send(resultado);
};

module.exports = KcController;
