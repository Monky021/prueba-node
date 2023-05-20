"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUser = exports.User = exports.USER_TABLET = void 0;
const sequelize_1 = require("sequelize");
exports.USER_TABLET = 'user';
class User extends sequelize_1.Model {
    // declare readonlydeletedAt!: Date // activar paranoid
    //methods
    static associate() {
        //models associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.USER_TABLET,
            modelName: 'User',
            timestamps: true
        };
    }
}
exports.User = User;
const initUser = (sequelize) => {
    return User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING(120),
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sessionActive: {
            field: 'session_active',
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        recoveryToken: {
            allowNull: true,
            field: 'recovery_token',
            type: sequelize_1.DataTypes.STRING,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(10),
            allowNull: false,
            unique: true,
        },
        address: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            defaultValue: sequelize_1.NOW
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            defaultValue: sequelize_1.NOW
        }
    }, User.config(sequelize));
};
exports.initUser = initUser;
exports.default = User;
