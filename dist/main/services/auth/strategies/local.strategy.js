"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const user_data_1 = __importDefault(require("../../../../data/useCase/user.data"));
const authData = new user_data_1.default();
const localStrategy = new passport_local_1.Strategy({
    usernameField: 'phone',
    passwordField: 'password'
}, (phone, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authData.login(phone, password);
        done(null, user);
    }
    catch (error) {
        done(error, false);
    }
}));
exports.default = localStrategy;
