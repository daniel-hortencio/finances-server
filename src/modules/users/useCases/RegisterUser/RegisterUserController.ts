import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ICreateUserBodyRequest } from '../../dtos';
import { RegisterUserUseCase } from "./RegisterUserUseCase";

export interface RegisterUserRequest extends Request {
  body: ICreateUserBodyRequest
}

class RegisterUserController {
  async handle(req: RegisterUserRequest, res: Response) {
    const {
      email,
      name,
      password,
      confirm_password,
      language,
      preferred_currency
    } = req.body

    const registerUserUseCase = container.resolve(RegisterUserUseCase)

    await registerUserUseCase.execute({
      email,
      name,
      password,
      confirm_password,
      language,
      preferred_currency
    })

    return res.status(201).send()
  }
}

export default new RegisterUserController()