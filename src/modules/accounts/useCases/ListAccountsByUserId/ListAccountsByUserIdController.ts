import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ListAccountsByUserIdUseCase } from "./ListAccountsByUserIdUseCase";

class ListAccountByUserIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user as string)

    const listAccountsByUserIdUseCase = container.resolve(ListAccountsByUserIdUseCase)

    const accounts = await listAccountsByUserIdUseCase.execute(`${id_user}`)

    return res.status(200).json(accounts)
  }
}

export default new ListAccountByUserIdController()