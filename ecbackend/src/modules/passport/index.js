const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (jwt_payload.id) return done(null, { id: jwt_payload.id});
    return done(null, false);
  })
);

module.exports = passport;
