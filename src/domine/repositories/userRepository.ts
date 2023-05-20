import User from "../../db/models/User";
import { IUser } from '../entities/User';

export interface UserRepository {
    create(user: IUser): Promise<User>;
    getAll(): Promise<User[]>;
}