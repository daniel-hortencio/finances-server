import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ListTransactionNamesSuggestByUserIdUseCase } from "./ListTransactionNamesSuggestByUserIdUseCase";

class ListTransactionNamesSuggestByUserIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_user } = req.auth

    const listTransactionNamesSuggestByUserIdUseCase = container.resolve(ListTransactionNamesSuggestByUserIdUseCase)

    const namesSuggest = await listTransactionNamesSuggestByUserIdUseCase.execute(`${id_user}`)

    return res.status(200).json(namesSuggest)
  }
}

export default new ListTransactionNamesSuggestByUserIdController()