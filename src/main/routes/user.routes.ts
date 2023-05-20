import { Router } from 'express'
import validatorHandler from '../middlewares/validator.handler';
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/register-user';
import { makeGetUsersController } from '../factory/user/list-user';
import { makeGetUserController } from '../factory/user/get-user';
import { makeUpdateUserController } from '../factory/user/update-user';
import { makeDeleteUserController } from '../factory/user/delete-user';


const router = Router()

//Ruta para crear usuario
router.post('/', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()))

//Ruta para listar los usuarios
router.get('/', AdapterRoute(makeGetUsersController()))

//Ruta para obtener un usuario
router.get('/:id', validatorHandler(getUserSchema, 'params'), AdapterRoute(makeGetUserController()))

//Ruta para actualizar usuario
router.put('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), AdapterRoute(makeUpdateUserController()) )

//Ruta para eliminar un usuario 
router.delete('/:id', validatorHandler(getUserSchema, 'params'), AdapterRoute(makeDeleteUserController()))
 
export default router


