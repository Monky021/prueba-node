"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormErrorHandler = exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
const sequelize_1 = require("sequelize");
function logErrors(err, req, res, next) {
    console.log("🚀 ~ file: error.handler.ts:6 ~ logErrors ~ err:", err);
    // console.log(err);
    next(err);
}
exports.logErrors = logErrors;
function errorHandler(err, req, res, next) {
    res.status(500).json({
        success: true,
        message: err.message,
        stack: err.stack,
    });
}
exports.errorHandler = errorHandler;
function boomErrorHandler(err, req, res, next) {
    console.log('error boom');
    if (err.isBoom) {
        const { output } = err;
        console.log({ output });
        res.status(output.statusCode).json({
            success: false,
            message: output.payload.message,
            body: {}
        });
    }
    next(err);
}
exports.boomErrorHandler = boomErrorHandler;
function ormErrorHandler(err, req, res, next) {
    if (err instanceof sequelize_1.ValidationError) {
        res.status(409).json({
            success: false,
            message: err.name,
            errors: err.errors
        });
    }
    next(err);
}
exports.ormErrorHandler = ormErrorHandler;
