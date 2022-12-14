import { User } from '../../entities/User'
import {
  IUpdateUserPreferencesDTO,
  IUpdateUserInfosDTO
} from '../../dtos'

interface IUsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
  updatePreferences(id: string, body: IUpdateUserPreferencesDTO): Promise<void>;
  updateInfos(id: string, body: IUpdateUserInfosDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository }