"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_handler_1 = __importDefault(require("../middlewares/validator.handler"));
const user_schema_1 = require("../schemas/user.schema");
const express_adapter_1 = require("../adapters/express-adapter");
const register_user_1 = require("../factory/user/register-user");
const list_user_1 = require("../factory/user/list-user");
const get_user_1 = require("../factory/user/get-user");
const update_user_1 = require("../factory/user/update-user");
const delete_user_1 = require("../factory/user/delete-user");
const passport_1 = __importDefault(require("passport"));
const login_1 = require("../factory/user/login");
const router = (0, express_1.Router)();
//Ruta para crear usuario
router.post('/', (0, validator_handler_1.default)(user_schema_1.createUserSchema, 'body'), (0, express_adapter_1.AdapterRoute)((0, register_user_1.makeRegisterUserController)()));
//Ruta para listar los usuarios
router.get('/', (0, express_adapter_1.AdapterRoute)((0, list_user_1.makeGetUsersController)()));
//Ruta para obtener un usuario
router.get('/:id', (0, validator_handler_1.default)(user_schema_1.getUserSchema, 'params'), (0, express_adapter_1.AdapterRoute)((0, get_user_1.makeGetUserController)()));
//Ruta para actualizar usuario
router.put('/:id', (0, validator_handler_1.default)(user_schema_1.getUserSchema, 'params'), (0, validator_handler_1.default)(user_schema_1.updateUserSchema, 'body'), (0, express_adapter_1.AdapterRoute)((0, update_user_1.makeUpdateUserController)()));
//Ruta para eliminar un usuario 
router.delete('/:id', (0, validator_handler_1.default)(user_schema_1.getUserSchema, 'params'), (0, express_adapter_1.AdapterRoute)((0, delete_user_1.makeDeleteUserController)()));
//Ruta para hacer login
router.post('/login', passport_1.default.authenticate('local', { session: false }), (0, express_adapter_1.AdapterRoute)((0, login_1.makeLoginUserController)()));
exports.default = router;
