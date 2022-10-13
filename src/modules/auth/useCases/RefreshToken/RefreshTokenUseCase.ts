
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError';
import { AUTH_ERRORS } from '../../errors';
import { generateToken } from '../../services/GenerateToken';
import { IRefreshTokenRepository } from 'modules/auth/repositories/implementations/IRefreshTokenRepository';
import { IToken } from 'modules/auth/dtos/IToken';

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("RefreshTokenRepository")
    private refreshTokenRepository: IRefreshTokenRepository) { }

  async execute(body: any): Promise<{ token: string, expiresIn: number }> {
    const { id_refresh_token, id_user } = body

    const refreshTokenExists = await this.refreshTokenRepository.findById(id_refresh_token)

    if (!refreshTokenExists) {
      throw new AppError(AUTH_ERRORS.REFRESH_TOKEN_IS_INVALID)
    }

    const now = new Date().getTime();
    const refreshTokenHasExpired = now > refreshTokenExists.expiresIn * 1000

    if (refreshTokenHasExpired) {
      await this.refreshTokenRepository.deleteByRefreshTokenId(id_refresh_token)
    }

    if (refreshTokenExists.id_user !== id_user) {
      throw new AppError(AUTH_ERRORS.REFRESH_TOKEN_IS_INVALID)
    }

    if (refreshTokenHasExpired) {
      throw new AppError(AUTH_ERRORS.REFRESH_TOKEN_IS_EXPIRED)
    }

    const token = generateToken.execute(id_user)

    return { token, expiresIn: refreshTokenExists.expiresIn }
  }
}

export { RefreshTokenUseCase }