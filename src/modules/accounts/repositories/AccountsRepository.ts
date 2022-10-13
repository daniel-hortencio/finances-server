import { prismaClient } from "../../../prisma";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "./implementations/IAccountsRepository";
import {
  ICreateAccountDTO,
  IUpdateAccountDTO
} from '../dtos'
import { IGetAccountDTO } from "../dtos/IGetAccountDTO";

class AccountsRepository implements IAccountsRepository {
  private allAccounts: Account[];
  private static INSTANCE: AccountsRepository;

  constructor() {
    this.allAccounts = []
  }

  public static getInstance(): AccountsRepository {
    if (!AccountsRepository.INSTANCE) {
      AccountsRepository.INSTANCE = new AccountsRepository()
    }

    return AccountsRepository.INSTANCE
  }

  async list(id_user: string) {
    this.allAccounts = await prismaClient.accounts.findMany({
      where: {
        id_user
      },
      orderBy: {
        date: 'desc'
      }
    })

    return this.allAccounts as IGetAccountDTO[]
  }

  async create({
    description,
    currency,
    type,
    value,
    date,
    id_user,
    id_category
  }: ICreateAccountDTO) {
    const newAccount = new Account({
      description,
      currency,
      type,
      value,
      date,
      id_user,
      id_category
    })

    await prismaClient.accounts.create({
      data: newAccount
    })
  }

  async update(
    id_account: string,
    {
      description,
      currency,
      type,
      value,
      date,
      id_category
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
        date,
        id_category
      }
    })
  }

  async delete(id_account: string) {
    await prismaClient.accounts.delete({
      where: {
        id_account
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
  }
}

export { AccountsRepository }