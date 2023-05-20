import bcrypt from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => {

    const hash = await bcrypt.hash(password, 10)
    return hash

}

export const comparePassword = async (password: string, userPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, userPassword)
    return isMatch

}