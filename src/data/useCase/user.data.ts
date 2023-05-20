import { UserRepository } from '../../domine/repositories/userRepository';
import { IUser } from '../../domine/entities/User';
import User from '../../db/models/User';
import UserModel from '../../db/models/User';
import { hashPassword } from '../../main/helpers/hash-password';
import boom from '@hapi/boom';



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
    
    async getAll(): Promise<User[]> {
        
        const listUser = await UserModel.findAll({
            attributes: {
                exclude: ['password', 'recoveryToken']
            }
        })

        return listUser
    }
    async getOne(id: number ): Promise<User> {
        
        const user = await UserModel.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['password']
            }
        })
        if(!user){
            throw boom.badRequest('The user was not found.')
        }

        return user
    }
} 