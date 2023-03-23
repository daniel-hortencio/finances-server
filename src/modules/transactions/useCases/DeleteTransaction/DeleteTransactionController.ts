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
    const { id_transaction } = req.params

    const deleteTransactionUseCase = container.resolve(DeleteTransactionUseCase)

    await deleteTransactionUseCase.execute(id_transaction)

    return res.status(201).send()
  }
}

export default new DeleteTransactionController()