import { inject, injectable } from 'tsyringe'

import { IRefreshTokenRepository } from 'modules/auth/repositories/implementations/IRefreshTokenRepository';

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