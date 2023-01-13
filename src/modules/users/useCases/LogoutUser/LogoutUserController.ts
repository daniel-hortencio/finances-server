import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ICreateUserBodyRequest } from '../../dtos';
import { LogoutUserUseCase } from "./LogoutUserUseCase";

export interface CreateUserRequest extends Request {
  body: ICreateUserBodyRequest
}

class LogoutUserController {
  async handle(req: Request, res: Response) {
    const { id_user } = req.auth

    const logoutUserUseCase = container.resolve(LogoutUserUseCase)

    await logoutUserUseCase.execute(
      id_user
    )

    return res.status(200).send()
  }
}

export default new LogoutUserController()