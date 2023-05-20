"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetUsersController = void 0;
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const get_users_1 = __importDefault(require("../../../controllers/user/get-users"));
const makeGetUsersController = () => {
    const userRepository = new user_data_1.default();
    const user = new get_users_1.default(userRepository);
    return user;
};
exports.makeGetUsersController = makeGetUsersController;
