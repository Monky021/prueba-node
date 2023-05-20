


import { NextFunction } from 'express';
import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { StatusCodes } from 'http-status-codes';
import { UserRepository } from '../../domine/repositories/userRepository';



export default class GetUser implements Controller {

    constructor(private readonly userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async handle(httpRequest: HttpRequest, httpNext: NextFunction): Promise<HttpResponse> {
        
        
        try {
            const id = httpRequest.params.id
            const user = await this.userRepository.getOne(id)
            return success(user, 'Detail of users', StatusCodes.ACCEPTED)
        } catch (error) {
            return serverError(error)
        }
    }
}