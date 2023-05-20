"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../main/config");
const index_1 = __importDefault(require("./index"));
const { dbName, dbHost, dbPassword, dbPort, dbUser } = config_1.config;
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;
const sequelize = new sequelize_1.Sequelize(URI, {
    dialect: 'postgres',
    logging: false,
});
(0, index_1.default)(sequelize);
exports.default = sequelize;
