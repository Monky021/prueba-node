"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserController = void 0;
const update_user_1 = __importDefault(require("../../../controllers/user/update-user"));
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const makeUpdateUserController = () => {
    const userRepository = new user_data_1.default();
    const user = new update_user_1.default(userRepository);
    return user;
};
exports.makeUpdateUserController = makeUpdateUserController;
