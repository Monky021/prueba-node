import DeleteUser from '../../../controllers/user/delete-user';
import UserData from '../../../data/useCase/user.data';



export const makeDeleteUserController = (): DeleteUser => {
    const userRepository = new UserData()
    const user = new DeleteUser(userRepository)

    return user
}