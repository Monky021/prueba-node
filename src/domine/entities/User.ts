
export interface IUser {
    name: string,
    phone: string,
    address: string,
    email: string,
    password: string,
    status: boolean,
    sessionActive: boolean,
}

export interface UpdateUser extends Partial<IUser> {}