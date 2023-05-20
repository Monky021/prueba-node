import UserData from '../../../data/useCase/user.data';
import GetUsers from '../../../controllers/user/get-users';

export const makeGetUsersController = (): GetUsers => {
    const userRepository = new UserData()
    const user = new GetUsers(userRepository)

    return user
}