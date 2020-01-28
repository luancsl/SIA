const passport = require('passport');
require('../../bin/authConfig');

const requestRegister = async (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('registerUser', async (err, user, info) => {
    if (err || !user) {
      const error = new Error(info.message);
      return next(error);
    }
    return next();
  })(req, res, next);
};

const requestlogin = async (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('loginUser', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error(info.message);
        res.status(401);
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        // We don't want to store the sensitive information such as the
        // user password in the token so we pick only the email and id
        // Send back the token to the user
        const token = user.generateToken();
        return res.status(202).json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

module.exports = { requestlogin, requestRegister };
