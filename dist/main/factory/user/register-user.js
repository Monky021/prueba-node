"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterUserController = void 0;
const register_user_1 = __importDefault(require("../../../controllers/user/register-user"));
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const makeRegisterUserController = () => {
    const userRepository = new user_data_1.default();
    const user = new register_user_1.default(userRepository);
    return user;
};
exports.makeRegisterUserController = makeRegisterUserController;
