import User from "../../db/models/User";
import { IUser, UpdateUser } from '../entities/User';

export interface UserRepository {
    create(user: IUser): Promise<User>;
    getAll(): Promise<User[]>;
    getOne(id: User['id']): Promise<User>;
    update(id:User['id'], changes: UpdateUser): Promise<User>;
    delete(id: User['id']): Promise<void>
}