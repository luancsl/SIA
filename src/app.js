require('dotenv').config({ path: '.env' });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('./seeds');

// criando/invocando a API do express
const app = express();

// invoca a utilização do socket.io para requisição em tempo real
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());

// configuracao de parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const variables = require('../bin/configuration/variables');

// configurando o banco de dados
try {
  mongoose.connect(variables.Database.connection, {
    useNewUrlParser: true,
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('erro: '.concat(error));
}

// Middleware da conexão, permitindo utilização do socket.io
app.use((req, _res, next) => {
  req.io = io;
  return next();
});

// rotas

const stationRoute = require('./routes/stationRoute');
const kcRoute = require('./routes/kcRoute');
const serviceRoute = require('./routes/serviceRoute');
const admRouter = require('./routes/admRoute');
const userRoute = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');

// configurando as rotas
app.use('/station', stationRoute);
app.use('/kc', kcRoute);
app.use('/service', serviceRoute);
app.use('/adm', admRouter);
app.use('/user', userRoute);
app.use('/book', bookRoute);

// exportando api
module.exports = server;
