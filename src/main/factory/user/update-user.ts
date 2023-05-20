import UpdateUser from '../../../controllers/user/update-user';
import UserData from '../../../data/useCase/user.data';


export const makeUpdateUserController = (): UpdateUser => {
    const userRepository = new UserData()
    const user = new UpdateUser(userRepository)

    return user
}