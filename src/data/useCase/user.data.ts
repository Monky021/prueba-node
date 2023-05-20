import { UserRepository } from '../../domine/repositories/userRepository';
import { IUser, UpdateUser } from '../../domine/entities/User';
import User from '../../db/models/User';
import UserModel from '../../db/models/User';
import { hashPassword, comparePassword } from '../../main/helpers/manager-password';
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
    async getOne(id: number): Promise<User> {

        const user = await UserModel.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['password']
            }
        })
        if (!user) {
            throw boom.notFound('The user was not found.')
        }

        return user
    }
    async update(id: number, changes: UpdateUser): Promise<User> {

        const user = await this.getOne(id)

        const update = await user.update(changes)
        return update
    }

    async delete(id: number): Promise<void> {
        const user = await this.getOne(id)
        user.destroy()
        
    }
    async findByPhone(phone: string): Promise<User> {
        const user = await UserModel.findOne({
            where: {
                phone
            }
        })
        if(!user){
            throw boom.unauthorized()
        }
        return user
    }

    async login(phone: string, password: string): Promise<User> {
        const user = await this.findByPhone(phone)
        const isMatch = await comparePassword(password, user.password)
        if(!isMatch){
            throw (boom.unauthorized())
        }
        return user
        
    }
} 