import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { IUpdateUserDTO } from '../../dtos';
import { UpdateUserUseCase } from "./UpdateUserUseCase";

interface UpdateUserRequest extends Request {
  body: IUpdateUserDTO,
  query: {
    id_user: string
  }
}

class UpdateUserController {
  async handle(req: UpdateUserRequest, res: Response) {
    const {
      name,
      password,
      language,
      preferred_currency
    } = req.body
    const { id_user } = req.query

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    await updateUserUseCase.execute(id_user,
      {
        name,
        password,
        language,
        preferred_currency
      })

    return res.status(200).send()
  }
}

export default new UpdateUserController()