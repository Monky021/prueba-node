
import { Sequelize } from "sequelize";
import { config } from '../main/config'
import setupModels from './index';



const { dbName, dbHost, dbPassword, dbPort, dbUser } = config
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);


const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize)


export default sequelize;
