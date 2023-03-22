import { knex } from "../../../shared/config/database";
import { Exchange } from "../entities/Exchange";
import { IExchangesRepository } from "./implementations/IExchangesRepository";
import {
  ICreateExchangeDTO, IUpdateExchangeDTO,
} from '../dtos'
import { IGetExchangeDTO } from "../dtos/IGetExchangeDTO";

class ExchangesRepository implements IExchangesRepository {
  private allExchanges: Exchange[];
  private readonly table_name = 'exchange'

  constructor() {
    this.allExchanges = []
  }

  async list(id_user: string) {
    this.allExchanges = await knex(this.table_name)
      .where('id_user', id_user)
      .select()
      .orderBy('date', 'desc')

    return this.allExchanges as IGetExchangeDTO[]
  }

  async create({
    input_value,
    input_currency,
    output_value,
    output_currency,
    date,
    id_user
  }: ICreateExchangeDTO) {
    await knex(this.table_name).insert({
      input_value,
      input_currency,
      output_value,
      output_currency,
      date,
      id_user
    })
  }

  async findById(id_exchange: string) {
    const exchange = await knex(this.table_name)
      .where('id_exchange', id_exchange)
      .first()

    return exchange
  }

  async deleteById(id_exchange: string) {
    await knex(this.table_name)
      .where('id_exchange', id_exchange)
      .del()
  }

  async deleteAllByUserId(id_user: string) {
    await knex(this.table_name)
      .where('id_user', id_user)
      .del()
  }

  async update(
    id_exchange: string,
    {
      input_value,
      input_currency,
      output_value,
      output_currency,
      date
    }: IUpdateExchangeDTO) {

    await knex(this.table_name)
      .where('id_exchange', id_exchange)
      .update({
        input_value,
        input_currency,
        output_value,
        output_currency,
        date
      })
  }
}

export { ExchangesRepository }