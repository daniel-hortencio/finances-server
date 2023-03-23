import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateTransactionDTO } from '../../dtos';
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

export interface CreateTransactionRequest extends Request {
  body: ICreateTransactionDTO
}

class CreateTransactionController {
  async handle(req: CreateTransactionRequest, res: Response) {
    const {
      description,
      value,
      type,
      currency,
      date,
      id_category = ""
    } = req.body
    const { id_user } = req.auth

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTransactionUseCase.execute({
      description,
      value,
      type,
      currency,
      date,
      id_user,
      id_category
    })

    return res.status(201).send()
  }
}

export default new CreateTransactionController()