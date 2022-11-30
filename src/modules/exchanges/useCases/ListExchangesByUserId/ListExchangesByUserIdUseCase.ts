import { inject, injectable } from 'tsyringe'

import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";
import { IGetExchangeDTO } from 'modules/exchanges/dtos';
import { IGetExchangesListDTO } from 'modules/exchanges/dtos/IGetExchangeDTO';

@injectable()
class ListExchangesByUserIdUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository) { }

  async execute(id_user: string): Promise<IGetExchangesListDTO[]> {
    const exchanges_list = await this.exchangesRepository.list(id_user)

    let exchanges_ordered_by_date: IGetExchangesListDTO[] = []

    exchanges_list.forEach((exchange) => {
      const year = exchange.date.getFullYear()
      const month = exchange.date.getUTCMonth()

      const exchange_index = exchanges_ordered_by_date.findIndex(exchange => exchange.year === year && exchange.month === month)

      if (exchange_index < 0) {
        exchanges_ordered_by_date.push({
          year,
          month,
          exchanges: [exchange]
        })
      } else {
        exchanges_ordered_by_date[exchange_index].exchanges.push(exchange)
      }
    })

    return exchanges_ordered_by_date;
  }
}

export { ListExchangesByUserIdUseCase }