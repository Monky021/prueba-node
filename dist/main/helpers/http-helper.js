"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.success = void 0;
const server_error_1 = require("./server-error");
const boom_1 = __importDefault(require("@hapi/boom"));
const success = (data, message, statusCode, success = true) => ({
    statusCode,
    body: data,
    message,
    success
});
exports.success = success;
const serverError = (error, message = 'Algo salio mal', success = false) => {
    if (boom_1.default.isBoom(error)) {
        const { output } = error;
        return {
            statusCode: output.statusCode,
            body: output.payload,
            message: 'Error de boom',
            success
        };
    }
    else {
        return {
            statusCode: 500,
            body: error instanceof Error ? new server_error_1.ServerError(error.stack) : 'Error sin identificar',
            message,
            success
        };
    }
};
exports.serverError = serverError;
