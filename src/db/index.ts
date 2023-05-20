import { Sequelize } from 'sequelize';
import { initUser } from './models/User';




export default function setupModels(sequelize: Sequelize){
  initUser(sequelize)


  //associates

}

