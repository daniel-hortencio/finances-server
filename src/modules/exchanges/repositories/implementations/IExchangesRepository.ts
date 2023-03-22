import {
  ICreateExchangeDTO, IUpdateExchangeDTO
} from '../../dtos'
import { IGetExchangeDTO } from 'modules/exchanges/dtos/IGetExchangeDTO';

interface IExchangesRepository {
  list(id_user: string): Promise<IGetExchangeDTO[]>;
  create(body: ICreateExchangeDTO): Promise<void>;
  findById(id_exchange: string): Promise<IGetExchangeDTO>;
  update(id_exchange: string, body: Omit<IUpdateExchangeDTO, "id_user" | "id_exchange">): Promise<void>;
  deleteById(id_exchange: string): Promise<void>;
  deleteAllByUserId(id_user: string): Promise<void>;
}

export { IExchangesRepository }