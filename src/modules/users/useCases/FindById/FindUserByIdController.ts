import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

export interface FindUserByIdRequest extends Request {
  params: {
    id_user: string
  }
}

class FindUserByIdController {
  async handle(req: FindUserByIdRequest, res: Response) {
    const { id_user } = req.params

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)

    const user = await findUserByIdUseCase.execute(id_user)

    return res.status(200).json(user)
  }
}

export default new FindUserByIdController()