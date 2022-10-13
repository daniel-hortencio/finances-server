import dayjs from 'dayjs'

import { IRefreshTokenRepository } from '../repositories/implementations/IRefreshTokenRepository';
import { RefreshTokenRepository } from '../repositories/RefreshTokenRepository';
import { IGetRefreshTokenDTO } from '../dtos/IGetRefreshToken';

class GenerateRefreshToken {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository) { }

  async execute(id_user: string): Promise<IGetRefreshTokenDTO> {
    const expiresIn = dayjs().add(1, 'day').unix()

    const refreshToken = await this.refreshTokenRepository.create(id_user, expiresIn)

    return refreshToken
  }
}

export const generateRefreshToken = new GenerateRefreshToken(new RefreshTokenRepository())