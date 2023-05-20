"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("../../db/sequelize"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const error_handler_1 = require("../middlewares/error.handler");
const routes_1 = __importDefault(require("../routes"));
const passportStrategies = __importStar(require("../services/auth"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.db();
        this.middlewares();
        this.routes(this.app);
        this.logErrors();
    }
    db() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sequelize_1.default.sync({ alter: true });
                console.log('Connected database!!');
            }
            catch (error) {
                console.log("🚀 Error al conectar base de datos");
                console.log(error);
            }
        });
    }
    routes(app) {
        (0, routes_1.default)(app);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms');
        const whitelist = ['http://localhost:8080', 'https://myapp.co'];
        const options = {
            origin: (origin, callback) => {
                if (whitelist.includes(origin || '') || !origin) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Origen no permitido'));
                }
            }
        };
        this.app.use((0, cors_1.default)(options));
        passportStrategies;
    }
    logErrors() {
        this.app.use(error_handler_1.logErrors);
        this.app.use(error_handler_1.ormErrorHandler);
        this.app.use(error_handler_1.boomErrorHandler);
        this.app.use(error_handler_1.errorHandler);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}
exports.default = Server;
