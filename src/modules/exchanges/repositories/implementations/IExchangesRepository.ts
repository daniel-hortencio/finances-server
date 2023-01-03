import {
  ICreateExchangeDTO
} from '../../dtos'
import { IGetExchangeDTO } from 'modules/exchanges/dtos/IGetExchangeDTO';

interface IExchangesRepository {
  list(id_user: string): Promise<IGetExchangeDTO[]>;
  create(body: ICreateExchangeDTO): Promise<void>;
  //update(id_exchange: string, body: Omit<ICreateExchangeDTO, "id_user">): Promise<void>;
  delete(id_exchange: string): Promise<void>;
}

export { IExchangesRepository }