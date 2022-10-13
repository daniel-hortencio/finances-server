import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { IUpdateCategoryDTO } from '../../dtos';
import { UpdateUserUseCase } from "./UpdateCategoryUseCase";

interface UpdateUserRequest extends Request {
  body: IUpdateCategoryDTO,
  query: {
    id_category: string
  }
}

class UpdateUserController {
  async handle(req: UpdateUserRequest, res: Response) {
    const {
      name,
      icon_name,
      background_color,
      icon_color
    } = req.body

    const {
      id_category
    } = req.query

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    await updateUserUseCase.execute(
      id_category,
      {
        name,
        icon_name,
        background_color,
        icon_color
      })

    return res.status(200).send()
  }
}

export default new UpdateUserController()