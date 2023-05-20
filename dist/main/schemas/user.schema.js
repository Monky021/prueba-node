"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.getUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const name = joi_1.default.string().max(50);
const email = joi_1.default.string().email().max(50);
const password = joi_1.default.string().min(8);
const phone = joi_1.default.string().max(10);
const address = joi_1.default.string().max(100);
exports.createUserSchema = joi_1.default.object({
    name: name.required(),
    phone: phone.required(),
    email: email.required(),
    password: password.required(),
    address: address.required()
});
exports.getUserSchema = joi_1.default.object({
    id: id.required()
});
exports.updateUserSchema = joi_1.default.object({
    name,
    phone,
    email,
    address,
});
