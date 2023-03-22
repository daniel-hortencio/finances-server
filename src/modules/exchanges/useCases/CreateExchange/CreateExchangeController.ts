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

    const createExchangeUseCase = container.resolve(CreateExchangeUseCase)

    await createExchangeUseCase.execute({
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