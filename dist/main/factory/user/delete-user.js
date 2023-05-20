"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteUserController = void 0;
const delete_user_1 = __importDefault(require("../../../controllers/user/delete-user"));
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const makeDeleteUserController = () => {
    const userRepository = new user_data_1.default();
    const user = new delete_user_1.default(userRepository);
    return user;
};
exports.makeDeleteUserController = makeDeleteUserController;
