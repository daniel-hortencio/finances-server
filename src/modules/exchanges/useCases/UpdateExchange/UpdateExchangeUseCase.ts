import { EXCHANGE_ERRORS } from '../../errors';
import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { IUpdateExchangeDTO } from "../../dtos";
import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";

@injectable()
class UpdateExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchange_repository: IExchangesRepository) { }

  async execute({
    id_exchange,
    input_value,
    input_currency,
    output_value,
    output_currency,
    date,
    id_user
  }: IUpdateExchangeDTO): Promise<void> {
    const exchange = await this.exchange_repository.findById(id_exchange)

    if (!exchange || exchange.id_user !== id_user) throw new AppError(EXCHANGE_ERRORS.NOT_FOUND, 404)
    this.exchange_repository.update(
      id_exchange,
      {
        input_value,
        input_currency,
        output_value,
        output_currency,
        date,
      })
  }
}

export { UpdateExchangeUseCase }