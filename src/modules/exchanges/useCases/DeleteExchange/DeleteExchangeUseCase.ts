import { EXCHANGE_ERRORS } from '../../errors';
import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";

@injectable()
class DeleteExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchange_repository: IExchangesRepository) { }

  async execute(id_exchange: string): Promise<void> {
    await this.exchange_repository.deleteById(id_exchange)
  }
}

export { DeleteExchangeUseCase }