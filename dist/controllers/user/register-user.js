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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_helper_1 = require("../../main/helpers/http-helper");
const http_status_codes_1 = require("http-status-codes");
class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = userRepository;
    }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = httpRequest.body;
                const { dataValues } = yield this.userRepository.create(Object.assign(Object.assign({}, data), { status: false, sessionActive: false }));
                const { password } = dataValues, user = __rest(dataValues, ["password"]);
                return (0, http_helper_1.success)(user, 'Registered user', http_status_codes_1.StatusCodes.CREATED);
            }
            catch (error) {
                return (0, http_helper_1.serverError)(error);
            }
        });
    }
}
exports.default = RegisterUser;
