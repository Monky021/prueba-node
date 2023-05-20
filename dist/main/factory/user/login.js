"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginUserController = void 0;
const login_1 = __importDefault(require("../../../controllers/auth/login"));
const user_data_1 = __importDefault(require("../../../data/useCase/user.data"));
const auth_data_1 = __importDefault(require("../../../data/useCase/auth.data"));
const makeLoginUserController = () => {
    const userRepository = new user_data_1.default();
    const authRepository = new auth_data_1.default();
    const user = new login_1.default(userRepository, authRepository);
    return user;
};
exports.makeLoginUserController = makeLoginUserController;
