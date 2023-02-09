import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { IUpdateUserInfosDTO } from '../../dtos';
import { UpdateUserInfosUseCase } from "./UpdateUserInfosUseCase";

interface UpdateUserRequest extends Request {
  body: IUpdateUserInfosDTO
}

class UpdateUserController {
  async handle(req: UpdateUserRequest, res: Response) {
    const {
      name
    } = req.body
    const { id_user } = req.auth

    console.log({ req })

    const updateUserInfosUseCase = container.resolve(UpdateUserInfosUseCase)

    await updateUserInfosUseCase.execute(id_user,
      {
        name
      })

    return res.status(200).send()
  }
}

export default new UpdateUserController()