import '../models/StationModel.js';
import Repository from '../repositories/stationRepository.js';

function StationController() { }

StationController.prototype.post = async (req, res) => {
  const resultado = await new Repository().create(req.body);
  res.status(200).send(resultado);
};

StationController.prototype.put = async (req, res) => {
  const resultado = await new Repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

StationController.prototype.get = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().readAll(dado);
  res.status(200).send(resultado);
};

StationController.prototype.getById = async (req, res) => {

  let resultado = await new Repository().readById(req.params.id);

  res.status(200).send(resultado);
};

StationController.prototype.delete = async (req, res) => {
  const resultado = await new Repository().delete(req.params.id);
  res.status(204).send(resultado);
};

StationController.prototype.getStationsDistance = async (req, res) => {
  const dado = req.query;

  let distance = 10;

  if (dado.distance !== undefined) {
    distance = dado.distance;
    delete dado.distance;
  }

  const grauParaKm = 109.98;
  const rad = distance / grauParaKm;

  const lat = parseFloat(dado.lat);
  const lon = parseFloat(dado.lon);

  delete dado.lat;
  delete dado.lon;

  const location = { near: [lat, lon], spherical: false, maxDistance: rad, distanceMultiplier: grauParaKm, distanceField: 'distance' };

  const resultado = await new Repository().requestAggregate([{ $geoNear: location }, { $match: dado }]);

  res.status(200).send(resultado);
};

export default StationController;
