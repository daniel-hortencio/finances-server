import { User } from "../entities/User"

export type IGetUserDTO = Omit<User, "password">

