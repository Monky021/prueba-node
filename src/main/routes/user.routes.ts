import { Router } from 'express'
import validatorHandler from '../middlewares/validator.handler';
import { createUserSchema, getUserSchema } from '../schemas/user.schema';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/register-user';
import { makeGetUsersController } from '../factory/user/lsit-user';
import { makeGetUserController } from '../factory/user/get-user';


const router = Router()

//Ruta para crear usuario
router.post('/', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()))

//Ruta para listar los usuarios
router.get('/', AdapterRoute(makeGetUsersController()))

//Ruta para obtener un usuario
router.get('/:id', validatorHandler(getUserSchema, 'params'), AdapterRoute(makeGetUserController()))
export default router


