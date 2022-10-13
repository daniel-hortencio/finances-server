import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindUserByIdUseCase } from '../../../users/useCases/FindById/FindUserByIdUseCase';

import { DeleteAccountUseCase } from "./DeleteAccountUseCase";

export interface DeleteAccountRequest extends Request {
  query: {
    id_account: string
  }
}

class DeleteAccountController {
  async handle(req: DeleteAccountRequest, res: Response) {
    const { id_user } = req.auth
    const { id_account } = req.query

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    await findUserByIdUseCase.execute(id_user)

    const deleteAccountUseCase = container.resolve(DeleteAccountUseCase)

    await deleteAccountUseCase.execute(id_account)

    return res.status(201).send()
  }
}

export default new DeleteAccountController()