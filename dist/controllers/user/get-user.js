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
class GetUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = userRepository;
    }
    handle(httpRequest, httpNext) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = httpRequest.params.id;
                const user = yield this.userRepository.getOne(id);
                return (0, http_helper_1.success)(user, 'Detail of users', http_status_codes_1.StatusCodes.ACCEPTED);
            }
            catch (error) {
                return (0, http_helper_1.serverError)(error);
            }
        });
    }
}
exports.default = GetUser;
