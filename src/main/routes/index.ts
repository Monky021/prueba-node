import {Express, Router} from 'express'
import usersRouter from './user.routes'


import passport from 'passport';

export default function routesApi(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  
  router.use('/users', usersRouter )

}
