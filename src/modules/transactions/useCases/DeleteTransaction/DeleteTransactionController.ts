import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase";

export interface DeleteTransactionRequest extends Request {
  query: {
    id_transaction: string
  }
}

class DeleteTransactionController {
  async handle(req: DeleteTransactionRequest, res: Response) {
    const { id_user } = req.auth
    const { id_transaction } = req.query

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const deleteTransactionUseCase = container.resolve(DeleteTransactionUseCase)

    await deleteTransactionUseCase.execute(id_transaction)

    return res.status(201).send()
  }
}

export default new DeleteTransactionController()