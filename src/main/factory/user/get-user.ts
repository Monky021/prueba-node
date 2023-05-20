import GetUser from '../../../controllers/user/get-user';
import UserData from '../../../data/useCase/user.data';
export const makeGetUserController = (): GetUser => {
    const userRepository = new UserData()
    const user = new GetUser(userRepository)

    return user
}