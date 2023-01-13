import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'


import { IRefreshTokenRepository } from 'modules/auth/repositories/implementations/IRefreshTokenRepository';
import { env } from '../../../../shared/config/environments';
import { generateToken } from '../../../../modules/auth/services/GenerateToken';

@injectable()
class LogoutUserUseCase {
  constructor(
    @inject("RefreshTokenRepository")
    private refreshTokenRepository: IRefreshTokenRepository) { }

  async execute(id_user: string): Promise<void> {
    await this.refreshTokenRepository.deleteByUserId(id_user)
  }
}

export { LogoutUserUseCase }