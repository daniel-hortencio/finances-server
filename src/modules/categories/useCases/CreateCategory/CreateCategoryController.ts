import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ICreateCategoryDTO } from '../../dtos';
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export interface CreateUserRequest extends Request {
  body: ICreateCategoryDTO
}

class CreateUserController {
  async handle(req: CreateUserRequest, res: Response) {
    const {
      name,
      background_color,
      icon_color,
      icon_name,
      type
    } = req.body
    const { id_user } = req.auth

    const createUserUseCase = container.resolve(CreateCategoryUseCase)

    await createUserUseCase.execute({
      name,
      id_user,
      background_color,
      icon_color,
      icon_name,
      type
    })

    return res.status(201).send()
  }
}

export default new CreateUserController()