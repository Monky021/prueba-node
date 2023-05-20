import { Router } from 'express'
import validatorHandler from '../middlewares/validator.handler';
import { createUserSchema } from '../schemas/user.schema';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/register-user';
import { makeGetUsersController } from '../factory/user/lsit-user';


const router = Router()

//Ruta para crear usuario
router.post('/create', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()))

//Ruta para listar los usuarios
router.get('/list', AdapterRoute(makeGetUsersController()))

export default router


