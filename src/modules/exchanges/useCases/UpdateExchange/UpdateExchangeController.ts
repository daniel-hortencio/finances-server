import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { IUpdateExchangeDTO } from '../../dtos';
import { UpdateExchangeUseCase } from "./UpdateExchangeUseCase";

export interface UpdateExchangeRequest extends Request {
  body: IUpdateExchangeDTO
}

class UpdateExchangeController {
  async handle(req: UpdateExchangeRequest, res: Response) {
    const {
      input_value,
      input_currency,
      output_value,
      output_currency,
      date
    } = req.body
    const { id_user } = req.auth
    const { id_exchange } = req.params

    const updateExchangeUseCase = container.resolve(UpdateExchangeUseCase)

    await updateExchangeUseCase.execute({
      id_exchange,
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

export default new UpdateExchangeController()