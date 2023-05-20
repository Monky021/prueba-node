import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { UserRepository } from '../../domine/repositories/userRepository';
import { StatusCodes } from 'http-status-codes';
export default class UpdateUser implements Controller {

    constructor (
        private readonly userRepository: UserRepository,
    ){
        this.userRepository = userRepository
    }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        
        try {
            const data = httpRequest.body
            const id = httpRequest.params.id
            const user = await this.userRepository.update(id, data)
        
            return success(user, 'Updated user', StatusCodes.CREATED)
        } catch (error) {
            return serverError(error)
        }
    }
}