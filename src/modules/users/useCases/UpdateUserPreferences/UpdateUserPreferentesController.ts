import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { IUpdateUserPreferencesDTO } from '../../dtos';
import { UpdateUserPreferencesUseCase } from "./UpdateUserPreferencesUseCase";

interface UpdateUserRequest extends Request {
  body: IUpdateUserPreferencesDTO,
  query: {
    id_user: string
  }
}

class UpdateUserController {
  async handle(req: UpdateUserRequest, res: Response) {
    const {
      language,
      preferred_currency
    } = req.body
    const { id_user } = req.auth

    const updateUserPreferencesUseCase = container.resolve(UpdateUserPreferencesUseCase)

    await updateUserPreferencesUseCase.execute(id_user,
      {
        language,
        preferred_currency
      })

    return res.status(200).send()
  }
}

export default new UpdateUserController()