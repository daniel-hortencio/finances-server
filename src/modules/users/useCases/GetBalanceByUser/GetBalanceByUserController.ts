import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetBalanceByUserUseCase } from './GetBalanceByUserUseCase';

class GetBalanceByIdUserController {
  async handle(req: Request, res: Response) {
    const { id_user } = req.auth

    const getBalanceByUserUseCase = container.resolve(GetBalanceByUserUseCase)
    const balance = await getBalanceByUserUseCase.execute(id_user)

    return res.status(200).json(balance)
  }
}

export default new GetBalanceByIdUserController()