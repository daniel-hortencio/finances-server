import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateExchangeDTO } from '../../dtos';
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
    } = req.query
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const deleteExchangeUseCase = container.resolve(DeleteExchangeUseCase)

    await deleteExchangeUseCase.execute(id_exchange)

    return res.status(201).send()
  }
}

export default new CreateExchangeController()