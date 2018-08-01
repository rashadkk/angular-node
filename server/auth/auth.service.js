'use strict';

const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const User = require('../routes/api/user/user.model');
const config = require('../config/environment');
const jwtOptions = {};
const cookieExtractor = function (req) {
  return (req && req.signedCookies) ? req.signedCookies['jwt'] : null;
};
jwtOptions.jwtFromRequest = cookieExtractor;
jwtOptions.secretOrKey = config.secretOrKey;

module.exports = () => {
  let strategy = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
    let u_id = jwt_payload.id;
    try {
      let user = await User.findById(u_id);
      user.loggedAs = jwt_payload.loggedAs;
      return next(null, user);
    } catch (err) {
      return next(null, false);
    }
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", { session: false }),
    isAdmin: (req, res, next) => req.user.u_role == 'admin' ? next() : res.status(401).send('Unauthorized'),
  };
}