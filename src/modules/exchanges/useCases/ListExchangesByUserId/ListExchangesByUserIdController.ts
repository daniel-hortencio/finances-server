import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ListExchangesByUserIdUseCase } from "./ListExchangesByUserIdUseCase";

class ListExchangesByUserIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user as string)

    const listExchangesByUserIdUseCase = container.resolve(ListExchangesByUserIdUseCase)

    const exchanges = await listExchangesByUserIdUseCase.execute(id_user)

    return res.status(200).json(exchanges)
  }
}

export default new ListExchangesByUserIdController()