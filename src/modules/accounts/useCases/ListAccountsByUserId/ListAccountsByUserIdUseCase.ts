import { inject, injectable } from 'tsyringe'

import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";
import { IGetAccountDTO, IGetMovementsDTO } from 'modules/accounts/dtos/IGetAccountDTO';
import { IExchangesRepository } from 'modules/exchanges/repositories/implementations/IExchangesRepository';

@injectable()
class ListAccountsByUserIdUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountsRepository: IAccountsRepository,
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository
  ) { }

  async execute(id_user: string): Promise<IGetMovementsDTO[]> {
    const accounts = await this.accountsRepository.list(id_user)

    const exchanges = await this.exchangesRepository.list(id_user)

    let movements_list: IGetMovementsDTO[] = []

    accounts.forEach((account) => {
      const year = account.date.getUTCFullYear()
      const month = account.date.getUTCMonth()

      const statement_index = movements_list.findIndex(statement => statement.year === year && statement.month === month)

      if (statement_index < 0) {
        movements_list.push({
          year,
          month,
          movements: [account]
        })
      } else {
        movements_list[statement_index].movements.push(account)
      }
    })

    exchanges.forEach((exchange) => {
      const year = exchange.date.getFullYear()
      const month = exchange.date.getUTCMonth()

      const statement_index = movements_list.findIndex(statement => statement.year === year && statement.month === month)

      if (statement_index < 0) {
        movements_list.push({
          year,
          month,
          movements: [exchange]
        })
      } else {
        const movement_index_to_insert = movements_list[statement_index].movements.findIndex(movement => movement.date < exchange.date)

        if (movement_index_to_insert < 0) {
          movements_list[statement_index].movements.push(exchange)
        } else {
          movements_list[statement_index].movements.splice(movement_index_to_insert, 0, exchange)
        }
      }
    })

    return movements_list;
  }
}

export { ListAccountsByUserIdUseCase }