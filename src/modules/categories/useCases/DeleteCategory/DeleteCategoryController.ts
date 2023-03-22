import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteUserUseCase } from "./DeleteCategoryUseCase";

interface DeleteUserRequest extends Request {
  query: {
    id_category: string
  }
}

class DeleteUserController {
  async handle(req: DeleteUserRequest, res: Response) {
    const { id_user } = req.auth
    const { id_category } = req.params

    const deleteUserUseCase = container.resolve(DeleteUserUseCase)

    await deleteUserUseCase.execute(id_user, id_category)

    return res.status(200).send()
  }
}

export default new DeleteUserController()