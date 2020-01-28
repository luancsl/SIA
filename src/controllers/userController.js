require('../models/userModel');
const Repository = require('../repositories/userRepository');

function UserController() { }

UserController.prototype.post = async (req, res) => {
  const resultado = await new Repository().create(req.body);
  res.status(200).send(resultado);
};

UserController.prototype.put = async (req, res) => {
  const resultado = await new Repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

UserController.prototype.get = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().readAll(dado);
  res.status(200).send(resultado);
};

UserController.prototype.getById = async (req, res) => {

  let resultado = await new Repository().readById(req.params.id);

  res.status(200).send(resultado);
};

UserController.prototype.delete = async (req, res) => {
  const resultado = await new Repository().delete(req.params.id);
  res.status(204).send(resultado);
};

UserController.prototype.getBooks = async (req, res) => {
  const dado = req.query;

  dado.user_id = req.params.id;

  const resultado = await new Repository().getBooks(dado);
  res.status(200).send(resultado);
};

UserController.prototype.getUserBooks = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().requestAggregate([{
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "user_id",
      as: "books"
    }
  }, { $match: dado }]);

  res.status(200).send(resultado);
};

UserController.prototype.getUsersDistance = async (req, res) => {
  const dado = req.query;

  let resultado = await new Repository().readById(req.params.id);
  let distance = resultado.config.distance;

  if (dado.distance !== undefined) {
    distance = dado.distance;
    delete dado.distance;
  }

  const grauParaKm = 109.98;
  const rad = distance / grauParaKm;

  const lat = resultado.locations[0];
  const long = resultado.locations[1];

  const locations = { near: [lat, long], spherical: false, maxDistance: rad, distanceMultiplier: grauParaKm, distanceField: 'distance' };
  const campos = { nome: 1, sobrenome: 1, username: 1, email: 1, foto_usuario: 1, distance: 1, locations: 1 };
  const ref = { from: "books", localField: "_id", foreignField: "user_id", as: "books" };

  resultado = await new Repository().requestAggregate([{ $geoNear: locations }, { $match: dado }, { $project: campos }, { $skip: 1 }, { $lookup: ref }]);

  res.status(200).send(resultado);
};

module.exports = UserController;
