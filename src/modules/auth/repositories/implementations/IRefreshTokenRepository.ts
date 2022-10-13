import { IRefreshTokenDTO } from "modules/auth/dtos/IRefreshToken";
import { IGetRefreshTokenDTO } from "../../dtos/IGetRefreshToken";

interface IRefreshTokenRepository {
  create(id_user: string, expiresIn: number): Promise<IGetRefreshTokenDTO>;
  findById(id_refresh_token: string): Promise<IRefreshTokenDTO | null>;
  deleteByRefreshTokenId(id_refresh_token: string): Promise<void>;
  deleteByUserId(id_user: string): Promise<void>;
}

export { IRefreshTokenRepository }