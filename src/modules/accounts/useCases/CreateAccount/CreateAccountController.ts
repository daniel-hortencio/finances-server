import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateAccountDTO } from '../../dtos';
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export interface CreateAccountRequest extends Request {
  body: ICreateAccountDTO
}

class CreateAccountController {
  async handle(req: CreateAccountRequest, res: Response) {
    const {
      description,
      value,
      type,
      currency,
      date,
      id_category
    } = req.body
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const createAccountUseCase = container.resolve(CreateAccountUseCase)

    await createAccountUseCase.execute({
      description,
      value,
      type,
      currency,
      date,
      id_user,
      id_category
    })

    return res.status(201).send()
  }
}

export default new CreateAccountController()