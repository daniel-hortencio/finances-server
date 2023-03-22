import { Request, Response, NextFunction } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'
import { AUTH_ERRORS } from '../../../../../modules/auth/errors'
import { AppError } from '../../../../errors/AppError'
import { Environments } from '../../../../config/environments'
import { container } from 'tsyringe'
import { IUsersRepository } from 'modules/users/repositories/implementations/IUsersRepository'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { auth = "" } = req.headers

  if (!auth) {
    throw new AppError(AUTH_ERRORS.TOKEN_NOT_INFORMED, 401)
  }

  const [, token] = (auth as string).split('Bearer ')

  if (!auth) {
    throw new AppError(AUTH_ERRORS.TOKEN_FORMAT_IS_INCORRECT, 401)
  }

  let is_valid_token: string | JwtPayload | undefined

  verify(token as string, Environments.JWT_AUTH_SECRET, (err, valid) => {
    if (err?.message) {
      switch (err?.message) {
        case "jwt expired":
          throw new AppError(AUTH_ERRORS.TOKEN_IS_EXPIRED, 401);
        case "invalid signature":
          throw new AppError(AUTH_ERRORS.TOKEN_IS_INVALID, 401);
        case "jwt malformed":
          throw new AppError(AUTH_ERRORS.TOKEN_FORMAT_IS_INCORRECT, 401);
        default:
          throw new AppError(AUTH_ERRORS.TOKEN_IS_INVALID, 401);
      }
    }

    is_valid_token = valid
  })

  const user_repository = container.resolve<IUsersRepository>('UsersRepository');

  const user_exists = await user_repository.findById(is_valid_token?.sub as string)

  if (!user_exists) throw new AppError(AUTH_ERRORS.TOKEN_IS_INVALID, 401);

  req.auth = {
    id_user: is_valid_token?.sub as string
  }

  next()
}
