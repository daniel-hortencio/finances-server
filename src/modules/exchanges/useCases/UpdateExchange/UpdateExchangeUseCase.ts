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
    date
  }: IUpdateExchangeDTO): Promise<void> {
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