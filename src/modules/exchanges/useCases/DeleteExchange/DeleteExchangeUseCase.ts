import { inject, injectable } from 'tsyringe'

import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";

@injectable()
class DeleteExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangeRepository: IExchangesRepository) { }

  async execute(id_exchange: string): Promise<void> {
    await this.exchangeRepository.delete(id_exchange)
  }
}

export { DeleteExchangeUseCase }