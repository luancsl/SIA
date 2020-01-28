require('../models/stationModel');
const Repository = require('../repositories/stationRepository');
const Inmet = require('../services/inmet_api');
const NasaPower = require('../services/nasaPower_api');
const ServiceApi = require('../services')
const Equation = require('../equation');

function ServiceController() { }

ServiceController.prototype.post = async (req, res) => {
  const resultado = await new Repository().create(req.body);
  res.status(200).send(resultado);
};

ServiceController.prototype.put = async (req, res) => {
  const resultado = await new Repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

ServiceController.prototype.get = async (req, res) => {
  const dado = req.query;

  const resultado = await new Repository().readAll(dado);
  res.status(200).send(resultado);
};

ServiceController.prototype.getById = async (req, res) => {

  let resultado = await new Repository().readById(req.params.id);

  res.status(200).send(resultado);
};

ServiceController.prototype.delete = async (req, res) => {
  const resultado = await new Repository().delete(req.params.id);
  res.status(204).send(resultado);
};

ServiceController.prototype.getServicesDistance = async (req, res) => {
  const dado = req.query;

  let selection = 0;
  let distance = 10;

  if (dado.distance !== undefined) {
    distance = dado.distance;
    delete dado.distance;
  }

  if ((dado.service !== undefined) || (dado.type !== undefined)) {
    if ((dado.service === 'nasa_power') || (dado.type === 'satellite')) {
      selection = 1;
    } else if ((dado.service === 'inmet') || (dado.type === 'station')) {
      if (dado.service === 'inmet') {
        selection = 2;
      }
    }
  }

  const grauParaKm = 109.98;
  const rad = distance / grauParaKm;

  const lat = parseFloat(dado.lat);
  const lon = parseFloat(dado.lon);
  const startDate = dado.startDate
  const endDate = dado.endDate;

  delete dado.lat;
  delete dado.lon;
  delete dado.startDate;
  delete dado.endDate;
  delete dado.service;
  delete dado.type;

  const location = { near: [lat, lon], spherical: false, maxDistance: rad, distanceMultiplier: grauParaKm, distanceField: 'distance' };

  resultado = await new Repository().requestAggregate([{ $geoNear: location }, { $match: dado }]);

  console.log(resultado);

  if (selection === 0) {
    if (resultado.length === 0) {
      NasaPower(lat, lon, startDate, endDate, (resposta) => res.status(200).send(resposta));
    } else {
      Inmet(resultado[0], lat, lon, resultado[0].url, startDate, endDate, (resposta) => res.status(200).send(resposta));
    }
  } else if (selection === 1) {
    NasaPower(lat, lon, startDate, endDate, (resposta) => res.status(200).send(resposta));
  } else if (selection == 2) {
    if (resultado.length === 0) {
      NasaPower(lat, lon, startDate, endDate, (resposta) => res.status(200).send(resposta));
    } else {
      Inmet(resultado[0], lat, lon, resultado[0].url, startDate, endDate, (resposta) => res.status(200).send(resposta));
    }
  }

};

const encapsulate = (full_data, equation) => {
  const [Calculate, equation_name] = Equation(equation);
  let data_array = full_data.features.data;
  const elevation = full_data.features.parameters.location.elevation;
  for (const data of data_array) {
    const eto = Calculate(data.Rad_Qg, data.Rad_Q0, data.Hum, data.Tmax, data.Tmin, data.Wind, elevation);
    data.Eto = parseFloat(eto.toFixed(2));
  }
  full_data.features.parameters.equation = equation_name;
  full_data.features.data = data_array;
  return full_data;
}

ServiceController.prototype.getEto = async (req, res) => {
  const dado = req.query;

  let selectionService = '';
  let distance = 10;
  let equation = 'penman-monteith';
  let url = '';

  if (dado.distance !== undefined) {
    distance = dado.distance;
  }
  if (dado.equation !== undefined) {
    equation = dado.equation;
  }
  if (dado.service !== undefined) {
    selectionService = dado.service;
  }
  if (dado.type !== undefined) {
    selectionService = dado.type;
  }

  const grauParaKm = 109.98;
  const rad = distance / grauParaKm;

  const lat = parseFloat(dado.lat);
  const lon = parseFloat(dado.lon);
  const startDate = dado.startDate
  const endDate = dado.endDate;

  delete dado.lat;
  delete dado.lon;
  delete dado.startDate;
  delete dado.endDate;
  delete dado.service;
  delete dado.type;
  delete dado.equation;
  delete dado.distance;

  const location = { near: [lat, lon], spherical: false, maxDistance: rad, distanceMultiplier: grauParaKm, distanceField: 'distance' };

  resultado = await new Repository().requestAggregate([{ $geoNear: location }, { $match: dado }]);

  console.log(resultado);

  [url, selectionService] = resultado.length > 0 ? [resultado[0].url, selectionService] : [null, 'satellite'];

  const Service = ServiceApi(selectionService);

  Service(resultado[0], lat, lon, url, startDate, endDate, (resposta) => res.status(200).send(encapsulate(resposta, equation)));

};

const encapsulate_etc = (full_data, kc, equation) => {
  const [Calculate, equation_name] = Equation(equation);
  kc = parseFloat(kc);
  let data_array = full_data.features.data;
  const elevation = full_data.features.parameters.location.elevation;
  full_data.features.parameters.kc = kc;

  for (const data of data_array) {
    let eto = Calculate(data.Rad_Qg, data.Rad_Q0, data.Hum, data.Tmax, data.Tmin, data.Wind, elevation);
    eto = parseFloat(eto.toFixed(2));
    let etc = eto * kc;
    etc = parseFloat(etc.toFixed(2));
    data.Eto = eto;
    data.Etc = etc;
  }
  full_data.features.parameters.equation = equation_name;
  full_data.features.data = data_array;
  return full_data;
}

ServiceController.prototype.getEtc = async (req, res) => {
  const dado = req.query;

  let selectionService = '';
  let distance = 10;
  let equation = 'penman-monteith';
  let kc = '';
  let url = '';

  if (dado.distance !== undefined) {
    distance = dado.distance;
  }
  if (dado.equation !== undefined) {
    equation = dado.equation;
  }
  if (dado.service !== undefined) {
    selectionService = dado.service;
  }
  if (dado.type !== undefined) {
    selectionService = dado.type;
  }
  if (dado.kc !== undefined) {
    kc = dado.kc;
  }

  const grauParaKm = 109.98;
  const rad = distance / grauParaKm;

  const lat = parseFloat(dado.lat);
  const lon = parseFloat(dado.lon);
  const startDate = dado.startDate
  const endDate = dado.endDate;

  delete dado.lat;
  delete dado.lon;
  delete dado.startDate;
  delete dado.endDate;
  delete dado.service;
  delete dado.type;
  delete dado.equation;
  delete dado.distance;
  delete dado.kc;

  const location = { near: [lat, lon], spherical: false, maxDistance: rad, distanceMultiplier: grauParaKm, distanceField: 'distance' };

  resultado = await new Repository().requestAggregate([{ $geoNear: location }, { $match: dado }]);

  console.log(resultado);

  [url, selectionService] = resultado.length > 0 ? [resultado[0].url, selectionService] : [null, 'satellite'];

  const Service = ServiceApi(selectionService);

  Service(resultado[0], lat, lon, url, startDate, endDate, (resposta) => res.status(200).send(encapsulate_etc(resposta, kc, equation)));

};

module.exports = ServiceController;
