import { knex } from "../../../shared/config/database";
import { Transaction } from "../entities/Transaction";
import { ITransactionsRepository } from "./implementations/ITransactionsRepository";
import {
  ICreateTransactionDTO,
  IUpdateTransactionDTO
} from '../dtos'
import { IGetTransactionDTO } from "../dtos/IGetTransactionDTO";

class TransactionsRepository implements ITransactionsRepository {
  private allTransactions: Transaction[];
  private readonly table_name = 'transaction'

  constructor() {
    this.allTransactions = []
  }

  async list(id_user: string) {
    this.allTransactions = await knex(this.table_name)
      .where('id_user', id_user)
      .select()
      .orderBy('date', 'desc')

    return this.allTransactions as IGetTransactionDTO[]
  }

  async findById(id_transaction: string) {
    const transaction = await knex(this.table_name)
      .where('id_transaction', id_transaction)
      .first()

    return transaction
  }

  async create({
    description,
    currency,
    type,
    value,
    date,
    id_user,
    id_category
  }: ICreateTransactionDTO) {
    await knex(this.table_name).insert({
      description,
      currency,
      type,
      value,
      date,
      id_user,
      id_category
    })
  }

  async update(
    id_transaction: string,
    {
      description,
      currency,
      type,
      value,
      date,
      id_category = undefined
    }: IUpdateTransactionDTO) {

    await knex(this.table_name)
      .where('id_transaction', id_transaction)
      .update({
        description,
        currency,
        type,
        value,
        date,
        id_category
      })
  }

  async deleteById(id_transaction: string) {
    await knex(this.table_name)
      .where('id_transaction', id_transaction)
      .del()
  }

  async deleteCategory(id_category: string) {
    await knex(this.table_name)
      .where('id_category', id_category)
      .update({
        id_category: null
      })
  }

  async deleteAllByUserId(id_user: string) {
    await knex(this.table_name)
      .where('id_user', id_user)
      .del()
  }
}

export { TransactionsRepository }