import { RegisterUser } from "../../../controllers/user/register-user";
import UserData from '../../../data/useCase/user.data';

export const makeRegisterUserController = (): RegisterUser => {
    const userRepository = new UserData()
    const user = new RegisterUser(userRepository)

    return user
}