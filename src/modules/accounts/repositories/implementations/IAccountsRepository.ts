import {
  ICreateAccountDTO
} from '../../dtos'
import { IGetAccountDTO } from 'modules/accounts/dtos/IGetAccountDTO';

interface IAccountsRepository {
  list(id_user: string): Promise<IGetAccountDTO[]>;
  create(body: ICreateAccountDTO): Promise<void>;
  update(id_account: string, body: Omit<ICreateAccountDTO, "id_user">): Promise<void>;
  delete(id_account: string): Promise<void>;
  deleteCategory(id_category: string): Promise<void>;
}

export { IAccountsRepository }