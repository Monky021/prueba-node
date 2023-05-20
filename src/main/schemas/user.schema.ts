import Joi from 'joi';


const id = Joi.number().integer();
const name = Joi.string().max(50);
const email = Joi.string().email().max(50);
const password = Joi.string().min(8);
const phone = Joi.string().max(10);
const address = Joi.string().max(100)

export const createUserSchema = Joi.object({
    name: name.required(),
    phone: phone.required(),
    email: email.required(),
    password: password.required(),
    address: address.required()
})
