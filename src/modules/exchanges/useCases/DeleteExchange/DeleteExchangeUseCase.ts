import { EXCHANGE_ERRORS } from '../../errors';
import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { IExchangesRepository } from "../../repositories/implementations/IExchangesRepository";

@injectable()
class DeleteExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchange_repository: IExchangesRepository) { }

  async execute(id_user: string, id_exchange: string): Promise<void> {
    const exchange = await this.exchange_repository.findById(id_exchange)

    if (!exchange || exchange.id_user !== id_user) throw new AppError(EXCHANGE_ERRORS.NOT_FOUND, 404)

    await this.exchange_repository.deleteById(id_exchange)
  }
}

export { DeleteExchangeUseCase }