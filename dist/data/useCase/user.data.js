"use strict";
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
const User_1 = __importDefault(require("../../db/models/User"));
const manager_password_1 = require("../../main/helpers/manager-password");
const boom_1 = __importDefault(require("@hapi/boom"));
class UserData {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield (0, manager_password_1.hashPassword)(user.password);
            const userHash = Object.assign(Object.assign({}, user), { password: hash });
            const userDb = yield User_1.default.create(userHash);
            return userDb;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield User_1.default.findAll({
                attributes: {
                    exclude: ['password', 'recoveryToken']
                }
            });
            return listUser;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({
                where: {
                    id
                },
                attributes: {
                    exclude: ['password']
                }
            });
            if (!user) {
                throw boom_1.default.notFound('The user was not found.');
            }
            return user;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getOne(id);
            const update = yield user.update(changes);
            return update;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getOne(id);
            user.destroy();
        });
    }
    findByPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({
                where: {
                    phone
                }
            });
            if (!user) {
                throw boom_1.default.unauthorized();
            }
            return user;
        });
    }
    login(phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findByPhone(phone);
            const isMatch = yield (0, manager_password_1.comparePassword)(password, user.password);
            if (!isMatch) {
                throw (boom_1.default.unauthorized());
            }
            return user;
        });
    }
}
exports.default = UserData;
