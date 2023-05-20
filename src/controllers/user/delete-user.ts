
import { NextFunction } from 'express';
import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { StatusCodes } from 'http-status-codes';
import { UserRepository } from '../../domine/repositories/userRepository';



export default class DeleteUser implements Controller {

    constructor(private readonly userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async handle(httpRequest: HttpRequest, httpNext: NextFunction): Promise<HttpResponse> {
        
        
        try {
            const id = httpRequest.params.id
            const user = await this.userRepository.delete(id)
            return success(user, 'User deleted', StatusCodes.NO_CONTENT)
        } catch (error) {
            return serverError(error)
        }
    }
}