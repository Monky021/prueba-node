import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { UserRepository } from '../../domine/repositories/userRepository';
import { StatusCodes } from 'http-status-codes';
export default class RegisterUser implements Controller {

    constructor (
        private readonly userRepository: UserRepository,
    ){
        this.userRepository = userRepository
    }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        
        try {
            const data = httpRequest.body

            const {dataValues} = await this.userRepository.create({...data, status: false, sessionActive: false})
            const {password, ...user } = dataValues
        
            return success(user, 'Registered user', StatusCodes.CREATED)
        } catch (error) {
            return serverError(error)
        }
    }
}