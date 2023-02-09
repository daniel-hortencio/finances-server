import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateTransactionDTO } from '../../dtos';
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase";

export interface UpdateTransactionRequest extends Request {
  body: ICreateTransactionDTO;
  query: {
    id_transaction: string;
  };
}

class UpdateTransactionController {
  async handle(req: UpdateTransactionRequest, res: Response) {
    const {
      description,
      value,
      type,
      currency,
      date,
      id_category
    } = req.body
    const { id_user } = req.auth
    const { id_transaction } = req.query

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const updateTransactionUseCase = container.resolve(UpdateTransactionUseCase)

    await updateTransactionUseCase.execute({
      description,
      value,
      type,
      currency,
      date,
      id_category,
      id_transaction
    })

    return res.status(201).send()
  }
}

export default new UpdateTransactionController()