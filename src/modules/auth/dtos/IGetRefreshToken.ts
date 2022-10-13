import { IRefreshTokenDTO } from "./IRefreshToken";

type IGetRefreshTokenDTO = Omit<IRefreshTokenDTO, "id_user">

export { IGetRefreshTokenDTO }