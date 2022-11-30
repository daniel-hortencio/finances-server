import { inject, injectable } from 'tsyringe'

import { ICreateExchangeDTO } from "../../dtos";
import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";

@injectable()
class CreateExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangeRepository: IExchangesRepository) { }

  async execute({
    input_value,
    input_currency,
    output_value,
    output_currency,
    date,
    id_user
  }: ICreateExchangeDTO): Promise<void> {
    this.exchangeRepository.create({
      input_value,
      input_currency,
      output_value,
      output_currency,
      date,
      id_user
    })
  }
}

export { CreateExchangeUseCase }