import { Request, Response } from 'express'
import { IRefreshTokenDTO } from 'modules/auth/dtos/IRefreshToken';
import { container } from 'tsyringe';

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export interface RefreshTokenRequest extends Request {
  query: Omit<IRefreshTokenDTO, "expiresIn">
}

class RefreshTokenController {
  async handle(req: RefreshTokenRequest, res: Response) {
    const { id_refresh_token, id_user } = req.query

    const refreshUseCase = container.resolve(RefreshTokenUseCase)
    const new_token = await refreshUseCase.execute({ id_refresh_token, id_user })

    return res.status(200).json({ new_token })
  }
}

export default new RefreshTokenController()