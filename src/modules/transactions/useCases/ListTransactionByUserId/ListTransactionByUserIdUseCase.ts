import { inject, injectable } from 'tsyringe'

import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";
import { IGetMovementsDTO } from 'modules/transactions/dtos/IGetTransactionDTO';
import { IExchangesRepository } from 'modules/exchanges/repositories/implementations/IExchangesRepository';

@injectable()
class ListTransactionsByUserIdUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository,
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository
  ) { }

  async execute(id_user: string): Promise<IGetMovementsDTO[]> {
    const transactions = await this.transactionsRepository.list(id_user)

    const exchanges = await this.exchangesRepository.list(id_user)

    let movements_list: IGetMovementsDTO[] = []

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date)
      const year = date.getUTCFullYear()
      const month = date.getUTCMonth()

      const statement_index = movements_list.findIndex(statement => statement.year === year && statement.month === month)

      if (statement_index < 0) {
        movements_list.push({
          year,
          month,
          movements: [transaction]
        })
      } else {
        movements_list[statement_index].movements.push(transaction)
      }
    })

    exchanges.forEach((exchange) => {
      const date = new Date(exchange.date)
      const year = date.getUTCFullYear()
      const month = date.getUTCMonth()

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

export { ListTransactionsByUserIdUseCase }