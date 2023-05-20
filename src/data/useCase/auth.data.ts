import jwt from 'jsonwebtoken'
import AuthService, { Payload } from "../../domine/repositories/authRepository";
import { config } from '../../main/config/index';




export default class AuthServiceUser implements AuthService {
    signToken(payload: Payload): string {
        
        const token = jwt.sign(payload, config.secret, {expiresIn: '2h'})
        return token
    }
}