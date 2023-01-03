import { prismaClient } from "../../../prisma";
import { Exchange } from "../entities/Exchange";
import { IExchangesRepository } from "./implementations/IExchangesRepository";
import {
  ICreateExchangeDTO,
} from '../dtos'
import { IGetExchangeDTO } from "../dtos/IGetExchangeDTO";

class ExchangesRepository implements IExchangesRepository {
  private allExchanges: Exchange[];
  private static INSTANCE: ExchangesRepository;

  constructor() {
    this.allExchanges = []
  }

  public static getInstance(): ExchangesRepository {
    if (!ExchangesRepository.INSTANCE) {
      ExchangesRepository.INSTANCE = new ExchangesRepository()
    }

    return ExchangesRepository.INSTANCE
  }

  async list(id_user: string) {
    this.allExchanges = await prismaClient.exchanges.findMany({
      where: {
        id_user
      },
      orderBy: {
        date: 'desc'
      }
    })

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
    const newExchange = new Exchange({
      input_value,
      input_currency,
      output_value,
      output_currency,
      date,
      id_user
    })

    await prismaClient.exchanges.create({
      data: newExchange
    })
  }

  async delete(id_exchange: string) {
    await prismaClient.exchanges.delete({
      where: {
        id_exchange
      }
    })
  }

  /* async update(
    id_account: string,
    {
      description,
      currency,
      type,
      value,
      date,
      id_category = ""
    }: IUpdateAccountDTO) {

    await prismaClient.accounts.update({
      where: {
        id_account
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

  

  async deleteCategory(id_category: string) {
    await prismaClient.accounts.updateMany({
      where: {
        id_category
      },
      data: {
        id_category: ""
      }
    })
  } */
}

export { ExchangesRepository }