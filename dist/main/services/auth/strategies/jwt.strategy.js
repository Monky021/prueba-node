"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const index_1 = require("../../../config/index");
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: index_1.config.secret,
};
const jwtStrategy = new passport_jwt_1.Strategy(options, (payload, done) => {
    return done(null, payload);
});
exports.default = jwtStrategy;
