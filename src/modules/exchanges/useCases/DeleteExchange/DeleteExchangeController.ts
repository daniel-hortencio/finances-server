import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteExchangeUseCase } from "./DeleteExchangeUseCase";

export interface DeleteExchangeRequest extends Request {
  query: {
    id_exchange: string;
  }
}

class CreateExchangeController {
  async handle(req: DeleteExchangeRequest, res: Response) {
    const {
      id_exchange
    } = req.params
    const { id_user } = req.auth

    const deleteExchangeUseCase = container.resolve(DeleteExchangeUseCase)

    await deleteExchangeUseCase.execute(id_user, id_exchange)

    return res.status(201).send()
  }
}

export default new CreateExchangeController()