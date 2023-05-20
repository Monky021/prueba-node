import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { UserRepository } from '../../domine/repositories/userRepository';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../../domine/repositories/authRepository';
import { config } from '../../main/config/index';
export default class LoginUser implements Controller {

    constructor (
        private readonly userRepository: UserRepository,
        private readonly authRepository: AuthService
    ){
        this.userRepository = userRepository
        this.authRepository = authRepository
    }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        
        try {
            const user = httpRequest.user

            const access_token = this.authRepository.signToken({sub: user.id})
            const userDb = await this.userRepository.update(user.id, {sessionActive: true})

            return success({user: userDb, access_token, token_type: config.type_token}, 'Successful login', StatusCodes.OK)
        } catch (error) {
            return serverError(error)
        }
    }
}