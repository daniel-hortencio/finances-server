import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(_: Request, res: Response): Promise<any> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)

    const allUsers = await listUsersUseCase.execute()

    return res.status(200).json(allUsers)
  }
}

export default new ListUsersController()