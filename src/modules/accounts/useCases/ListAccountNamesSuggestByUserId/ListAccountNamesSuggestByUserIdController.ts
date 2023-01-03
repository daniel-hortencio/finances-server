import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ListAccountNamesSuggestByUserIdUseCase } from "./ListAccountNamesSuggestByUserIdUseCase";

class ListAccountNamesSuggestByUserIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_user } = req.auth

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user as string)

    const listAccountNamesSuggestByUserIdUseCase = container.resolve(ListAccountNamesSuggestByUserIdUseCase)

    const namesSuggest = await listAccountNamesSuggestByUserIdUseCase.execute(`${id_user}`)

    return res.status(200).json(namesSuggest)
  }
}

export default new ListAccountNamesSuggestByUserIdController()