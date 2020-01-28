const server = require('./app');
const variables = require('../bin/configuration/variables');

server.listen(variables.Api.port, () => {
  console.log(`API inicializada na porta ${variables.Api.port}!`);
});
