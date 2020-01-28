const passport = require('passport');
require('../../bin/authConfig');

// middleware de registro de novo administrador
const requestRegister = async (req, res, next) => {
  // utiliza a funcao de autenticacao do framework passport
  // passando um authconfig 'registerAdm' como parametro
  // trata os erros retornados e decide se cria um novo adm ou nao atravez de um retorno next()
  // para proxima função de criacao de adm (controller adm)
  // eslint-disable-next-line consistent-return
  passport.authenticate('registerAdm', async (err, adm, info) => {
    if (err || !adm) {
      const error = new Error(info.message);
      return next(error);
    }
    return next();
  })(req, res, next);
};

// middleware de login de um administrador
const requestlogin = async (req, res, next) => {
  // utiliza a funcao de autenticacao do framework passport
  // passando um authconfig 'loginAdm' como parametro
  // trata os erros retornados e decide se retorna um objeto token validando a autenticacao
  // eslint-disable-next-line consistent-return
  passport.authenticate('loginAdm', async (err, adm, info) => {
    try {
      if (err || !adm) {
        const error = new Error(info.message);
        res.status(401);
        return next(error);
      }
      req.login(adm, { session: false }, async (error) => {
        if (error) return next(error);
        const token = adm.generateToken();

        return res.status(202).json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

module.exports = { requestlogin, requestRegister };
