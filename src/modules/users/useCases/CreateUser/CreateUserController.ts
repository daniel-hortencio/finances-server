import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ICreateUserBodyRequest } from '../../dtos';
import { CreateUserUseCase } from "./CreateUserUseCase";

export interface CreateUserRequest extends Request {
  body: ICreateUserBodyRequest
}

class CreateUserController {
  async handle(req: CreateUserRequest, res: Response) {
    const {
      email,
      name,
      password,
      confirm_password,
      language,
      preferred_currency
    } = req.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
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

export default new CreateUserController()