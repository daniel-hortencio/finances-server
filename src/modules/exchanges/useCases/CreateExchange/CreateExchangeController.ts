import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateExchangeDTO } from '../../dtos';
import { CreateExchangeUseCase } from "./CreateExchangeUseCase";

export interface CreateExchangeRequest extends Request {
  body: ICreateExchangeDTO
}

class CreateExchangeController {
  async handle(req: CreateExchangeRequest, res: Response) {
    const {
      input_value,
      input_currency,
      output_value,
      output_currency,
      date
    } = req.body
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const createAccountUseCase = container.resolve(CreateExchangeUseCase)

    await createAccountUseCase.execute({
      input_value,
      input_currency,
      output_value,
      output_currency,
      date,
      id_user
    })

    return res.status(201).send()
  }
}

export default new CreateExchangeController()