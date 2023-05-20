import { UserRepository } from '../../domine/repositories/userRepository';
import { IUser } from '../../domine/entities/User';
import User from '../../db/models/User';
import UserModel from '../../db/models/User';
import { hashPassword } from '../../main/helpers/hash-password';



export default class UserData implements UserRepository {

    async create(user: IUser): Promise<User> {
        const hash = await hashPassword(user.password)

        const userHash: IUser = {
            ...user,
            password: hash
        }
        const userDb = await UserModel.create(userHash) 
        return userDb 
    }
} 