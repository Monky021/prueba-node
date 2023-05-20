import { Router } from 'express'
import validatorHandler from '../middlewares/validator.handler';
import { createUserSchema } from '../schemas/user.schema';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/register-user';


const router = Router()


router.post('/create', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()))

export default router


