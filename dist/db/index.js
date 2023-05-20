"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
function setupModels(sequelize) {
    (0, User_1.initUser)(sequelize);
    //associates
}
exports.default = setupModels;
