import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ListTransactionsByUserIdUseCase } from "./ListTransactionByUserIdUseCase";

class ListTransactionByUserIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user as string)

    const listTransactionsByUserIdUseCase = container.resolve(ListTransactionsByUserIdUseCase)

    const transactions = await listTransactionsByUserIdUseCase.execute(`${id_user}`)

    return res.status(200).json(transactions)
  }
}

export default new ListTransactionByUserIdController()