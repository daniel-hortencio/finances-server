import { prismaClient } from "../../../prisma";
import { IRefreshTokenRepository } from "./implementations/IRefreshTokenRepository";

class RefreshTokenRepository implements IRefreshTokenRepository {
  private static INSTANCE: RefreshTokenRepository;

  public static getInstance(): RefreshTokenRepository {
    if (!RefreshTokenRepository.INSTANCE) {
      RefreshTokenRepository.INSTANCE = new RefreshTokenRepository()
    }

    return RefreshTokenRepository.INSTANCE
  }

  async findById(id_refresh_token: string) {
    const refresh_token = await prismaClient.refreshToken.findFirst({
      where: {
        id_refresh_token
      }
    })

    return refresh_token
  }

  async create(id_user: string, expiresIn: number) {
    await prismaClient.refreshToken.deleteMany({
      where: {
        id_user
      }
    })

    const refresh_token = await prismaClient.refreshToken.create({
      data: {
        id_user,
        expiresIn
      }
    })

    return { ...refresh_token, id_user: undefined }
  }

  async deleteByRefreshTokenId(id_refresh_token: string) {
    await prismaClient.refreshToken.deleteMany({
      where: {
        id_refresh_token
      }
    })
  }

  async deleteByUserId(id_user: string): Promise<void> {
    await prismaClient.refreshToken.deleteMany({
      where: {
        id_user
      }
    })
  }
}

export { RefreshTokenRepository }