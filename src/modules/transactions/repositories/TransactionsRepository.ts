import { prismaClient } from "../../../prisma";
import { Transaction } from "../entities/Transaction";
import { ITransactionsRepository } from "./implementations/ITransactionsRepository";
import {
  ICreateTransactionDTO,
  IUpdateTransactionDTO
} from '../dtos'
import { IGetTransactionDTO } from "../dtos/IGetTransactionDTO";

class TransactionsRepository implements ITransactionsRepository {
  private allTransactions: Transaction[];
  private static INSTANCE: TransactionsRepository;

  constructor() {
    this.allTransactions = []
  }

  public static getInstance(): TransactionsRepository {
    if (!TransactionsRepository.INSTANCE) {
      TransactionsRepository.INSTANCE = new TransactionsRepository()
    }

    return TransactionsRepository.INSTANCE
  }

  async list(id_user: string) {
    this.allTransactions = await prismaClient.transactions.findMany({
      where: {
        id_user
      },
      orderBy: {
        date: 'desc'
      }
    })

    return this.allTransactions as IGetTransactionDTO[]
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
    const newTransaction = new Transaction({
      description,
      currency,
      type,
      value,
      date,
      id_user,
      id_category
    })

    await prismaClient.transactions.create({
      data: newTransaction
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
      id_category = ""
    }: IUpdateTransactionDTO) {

    await prismaClient.transactions.update({
      where: {
        id_transaction
      },
      data: {
        description,
        currency,
        type,
        value,
        date: new Date(date),
        id_category
      }
    })
  }

  async delete(id_transaction: string) {
    await prismaClient.transactions.delete({
      where: {
        id_transaction
      }
    })
  }

  async deleteCategory(id_category: string) {
    await prismaClient.transactions.updateMany({
      where: {
        id_category
      },
      data: {
        id_category: ""
      }
    })
  }
}

export { TransactionsRepository }