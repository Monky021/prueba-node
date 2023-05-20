"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(stack) {
        super('Error internal the server');
        this.name = 'Error internal the server';
        this.stack = stack;
    }
}
exports.ServerError = ServerError;
