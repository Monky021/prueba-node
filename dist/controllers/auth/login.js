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
Object.defineProperty(exports, "__esModule", { value: true });
const http_helper_1 = require("../../main/helpers/http-helper");
const http_status_codes_1 = require("http-status-codes");
const index_1 = require("../../main/config/index");
class LoginUser {
    constructor(userRepository, authRepository) {
        this.userRepository = userRepository;
        this.authRepository = authRepository;
        this.userRepository = userRepository;
        this.authRepository = authRepository;
    }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = httpRequest.user;
                const access_token = this.authRepository.signToken({ sub: user.id });
                const userDb = yield this.userRepository.update(user.id, { sessionActive: true });
                return (0, http_helper_1.success)({ user: userDb, access_token, token_type: index_1.config.type_token }, 'Successful login', http_status_codes_1.StatusCodes.OK);
            }
            catch (error) {
                return (0, http_helper_1.serverError)(error);
            }
        });
    }
}
exports.default = LoginUser;
