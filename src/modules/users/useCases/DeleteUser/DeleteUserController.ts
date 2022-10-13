import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export interface DeleteUserRequest extends Request {
  query: {
    id_user: string
  }
}

class DeleteUserController {
  async handle(req: DeleteUserRequest, res: Response) {
    const { id_user } = req.auth

    const deleteUserUseCase = container.resolve(DeleteUserUseCase)
    const user = await deleteUserUseCase.execute(id_user)

    return res.status(200).json(user)
  }
}

export default new DeleteUserController()