
import express, {Application, Express} from 'express'
import sequelize from '../../db/sequelize'
import cors from 'cors'
import { boomErrorHandler, errorHandler, logErrors, ormErrorHandler } from '../middlewares/error.handler'
// import routesApi from '../routes'

// import * as passportStrategies from '../utils/auth'


class Server {
  private app: Express
  private port: string
  constructor(){
    this.app = express()
    this.port = process.env.PORT || '4000'
    this.db()
    this.middlewares()
    this.routes(this.app)
    this.logErrors()
  }

  async db(){
    try {
      await sequelize.sync()

      console.log('Connected database!!')

    } catch (error) {
      console.log("🚀 Error al conectar base de datos")
      console.log(error)
    }
  }

  routes(app: Express){
    // routesApi(app)
  }


  middlewares(){
    this.app.use(express.json());

    const whitelist = ['http://localhost:8080', 'https://myapp.co'];
    const options: cors.CorsOptions = {
      origin: (origin, callback) => {
        if (whitelist.includes(origin || '') || !origin) {
        callback(null, true);
        } else {
          callback(new Error('Origen no permitido'));
        }
      }
    }
    this.app.use(cors(options));
    // passportStrategies
  }

  logErrors(){

    this.app.use(logErrors)
    this.app.use(ormErrorHandler)
    this.app.use(boomErrorHandler)
    this.app.use(errorHandler)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ', this.port)
    })
  }


}

export default Server
