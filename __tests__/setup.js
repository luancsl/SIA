/* eslint-disable */
require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables')
// Load models since we will not be instantiating our express server.


beforeEach(function(done) {
  /*
    Define clearDB function that will loop through all
    the collections in our mongoose connection and drop them.
  */

  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    return done();
  }

  /*
    If the mongoose connection is closed,
    start it up using the test url and database name
    provided by the node runtime ENV
  */
  if (mongoose.connection.readyState === 0) {
    // configurando o banco de dados
    mongoose.connect(
      /*
      >>>>>>>>>>>>>>>>>Importante <<<<<<<<<<
      Configuração da porta do mongo  para docker-toolbox:  mongodb://192.168.99.100:27017/${process.env.TEST_SUITE}`
      Configuração da pora do mongo para local: mongodb://localhost:27017/${process.env.TEST_SUITE}`
      */
      `mongodb://192.168.99.100:27017/${process.env.TEST_SUITE}`,  // <- editar nesta linha
      function(err) {
        if (err) {
          throw err;
        }
        return clearDB();
      }
    );
  } else {
    return clearDB();
  }
});

afterEach(function(done) {

  return done();
});

afterAll(done => {
  mongoose.disconnect();
  return done();
});
