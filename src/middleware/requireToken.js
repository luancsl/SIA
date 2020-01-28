const passport = require('passport');

// middleware de usuarios e adms authenticados
// utiliza a funcao de autenticacao do framework passport
// passando um authconfig 'jwt' como parametro
// libera a rota se existir um token junto com a solicitacao de request
// caso contrario retorna nao autorizado e nao libera a rota
const requireJwtAuth = passport.authenticate('jwt', { session: false });

module.exports.requireToken = requireJwtAuth;
