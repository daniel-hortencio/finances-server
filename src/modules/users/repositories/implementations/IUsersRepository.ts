import { User } from '../../entities/User'
import {
  ICreateUserDTO,
  IUpdateUserDTO
} from '../../dtos'

interface IUsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
  create(body: ICreateUserDTO): Promise<void>;
  update(id: string, body: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository }