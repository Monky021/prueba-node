import { NextFunction } from 'express';
import { Controller } from '../../main/interface/controller';
import { HttpRequest, HttpResponse } from '../../main/interface/http-interface';
import { serverError, success } from '../../main/helpers/http-helper';
import { StatusCodes } from 'http-status-codes';
import { UserRepository } from '../../domine/repositories/userRepository';



export default class GetUsers implements Controller {

    constructor(private readonly userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async handle(httpRequest: HttpRequest, httpNext: NextFunction): Promise<HttpResponse> {
        
        
        try {
            const listUser = await this.userRepository.getAll()
            return success(listUser, 'List of users', StatusCodes.ACCEPTED)
        } catch (error) {
            return serverError(error)
        }
    }
}