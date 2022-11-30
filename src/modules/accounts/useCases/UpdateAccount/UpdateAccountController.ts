import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { ICreateAccountDTO } from '../../dtos';
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";

export interface UpdateAccountRequest extends Request {
  body: ICreateAccountDTO;
  query: {
    id_account: string;
  };
}

class UpdateAccountController {
  async handle(req: UpdateAccountRequest, res: Response) {
    const {
      description,
      value,
      type,
      currency,
      date,
      id_category
    } = req.body
    const { id_user } = req.auth
    const { id_account } = req.query

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const updateAccountUseCase = container.resolve(UpdateAccountUseCase)

    await updateAccountUseCase.execute({
      description,
      value,
      type,
      currency,
      date,
      id_category,
      id_account
    })

    return res.status(201).send()
  }
}

export default new UpdateAccountController()