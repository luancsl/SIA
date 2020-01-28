require('dotenv').config({ path: '.env' });
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const AdmModel = require('../src/models/admModel');
const UserModel = require('../src/models/userModel');


// estrategia de registro de novo administrador
passport.use(
  // pega o campo do username e password do json enviado
  'registerAdm',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    // eslint-disable-next-line consistent-return
    (username, password, done) => {
      // verifica se o usuername enviado já existe caso afirmativo
      // retorna false e erro com mensagem username já existente
      // do contrario retorna true
      try {
        AdmModel.findOne({ username }).then((adm) => {
          if (adm != null) {
            return done(null, false, { message: 'Username ja existe' });
          }
          return done(null, true);
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

// estrategia de login de um administrador
passport.use(
  // pega o campo do username e password do json enviado
  'loginAdm',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    // eslint-disable-next-line consistent-return
    async (username, password, done) => {
      // verifica se o usuario já existe
      // caso contrario retorna false e mensagem usuario nao encontrado
      // se existe verifica se a senha bate com a enviado no json caso contrario
      // retorn false e mensagem senha invalida
      // se tudo ocorre bem retorna o objeto como true e mensagem usuario autenticado
      try {
        AdmModel.findOne({ username }).then(async (adm) => {
          if (adm === null) {
            return done(null, false, { message: 'Usuario não encontrado' });
          }
          const result = await adm.isValidPassword(password);
          if (result !== true) {
            return done(null, false, { message: 'Senha invalida' });
          }
          return done(null, adm, { message: 'Usuario autenticado' });
        });
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  'registerUser',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    // eslint-disable-next-line consistent-return
    (username, password, done) => {
      try {
        UserModel.findOne({ username }).then((adm) => {
          if (adm != null) {
            return done(null, false, { message: 'Username ja existe' });
          }
          return done(null, true);
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

passport.use(
  'loginUser',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    // eslint-disable-next-line consistent-return
    async (username, password, done) => {
      try {
        UserModel.findOne({ username }).then(async (adm) => {
          if (adm === null) {
            return done(null, false, { message: 'Usuario não encontrado' });
          }
          const result = await adm.isValidPassword(password);
          if (result !== true) {
            return done(null, false, { message: 'Senha invalida' });
          }
          return done(null, adm, { message: 'Usuario autenticado' });
        });
      } catch (err) {
        return done(err);
      }
    },
  ),
);


// parametros da estrategia JWT
const opts = {
  // estrategia de extação do token do request atravez do Headers, parametro Athorization
  // procura no campo Authorization pelo token
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  // chave secreta para encriptografar e criar os tokens
  secretOrKey: process.env.jwtSecret,
};

// estrategia de validacao de tokens
passport.use(
  'jwt',
  // eslint-disable-next-line consistent-return
  new JWTStrategy(opts, (jwtPlayload, done) => {
    try {
      // pega e verifica valor id acoplado ao token referente ao usuario que enviou o token
      return done(null, jwtPlayload.adm.id);
    } catch (err) {
      done(err);
    }
  }),
);
