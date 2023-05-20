"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../../main/config/index");
class AuthServiceUser {
    signToken(payload) {
        const token = jsonwebtoken_1.default.sign(payload, index_1.config.secret, { expiresIn: '2h' });
        return token;
    }
}
exports.default = AuthServiceUser;
