import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListCategoriesByUserIdUseCase } from "./ListCategoriesByUserIdUseCase";

export interface ListCategoriesByUserIdRequest extends Request {
  query: {
    id_user: string;
  }
}

class ListCategoriesByUserIdController {
  async handle(req: ListCategoriesByUserIdRequest, res: Response): Promise<any> {
    const { id_user } = req.auth

    const listCategoriesByUserIdUseCase = container.resolve(ListCategoriesByUserIdUseCase)

    const categories = await listCategoriesByUserIdUseCase.execute(`${id_user}`)

    return res.status(200).json(categories)
  }
}

export default new ListCategoriesByUserIdController()