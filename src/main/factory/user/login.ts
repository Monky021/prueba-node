import LoginUser from '../../../controllers/auth/login';
import UserData from '../../../data/useCase/user.data';
import AuthService from '../../../domine/repositories/authRepository';
import AuthServiceUser from '../../../data/useCase/auth.data';

export const makeLoginUserController = (): LoginUser => {
    const userRepository = new UserData()
    const authRepository = new AuthServiceUser()
    const user = new LoginUser(userRepository, authRepository)

    return user
}