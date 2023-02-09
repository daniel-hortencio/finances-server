import {
  ICreateTransactionDTO
} from '../../dtos'
import { IGetTransactionDTO } from 'modules/transactions/dtos/IGetTransactionDTO';

interface ITransactionsRepository {
  list(id_user: string): Promise<IGetTransactionDTO[]>;
  create(body: ICreateTransactionDTO): Promise<void>;
  update(id_transaction: string, body: Omit<ICreateTransactionDTO, "id_user">): Promise<void>;
  delete(id_transaction: string): Promise<void>;
  deleteCategory(id_category: string): Promise<void>;
}

export { ITransactionsRepository }