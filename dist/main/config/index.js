"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    secret: process.env.SECRET,
    secretPassword: process.env.SECRET_PASSWORD,
    dialect: process.env.DIALECT || 'postgres',
    type_token: process.env.TYPE_TOKEN || 'bearer'
};
