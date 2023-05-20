"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetUserController = void 0;
const get_user_1 = __importDefault(require("../../../controllers/user/get-user"));
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const makeGetUserController = () => {
    const userRepository = new user_data_1.default();
    const user = new get_user_1.default(userRepository);
    return user;
};
exports.makeGetUserController = makeGetUserController;
