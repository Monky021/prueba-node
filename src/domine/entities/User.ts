
export interface IUser {
    name: string,
    phone: string,
    address: string,
    email: string,
    password: string,
    status: boolean,
    login: boolean,
}

export interface UpdateUser extends Partial<IUser> {}