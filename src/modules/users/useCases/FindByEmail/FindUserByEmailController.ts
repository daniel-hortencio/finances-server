import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";

export interface FindUserByEmailRequest extends Request {
  query: {
    email: string
  }
}

class FindUserByEmailController {
  async handle(req: FindUserByEmailRequest, res: Response) {
    const { email } = req.query

    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase)

    const user = await findUserByEmailUseCase.execute(email)

    return res.status(200).json(user)
  }
}

export default new FindUserByEmailController()

