import { TRANSACTION_ERRORS } from '../../errors';
import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class DeleteTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: ITransactionsRepository) { }

  async execute(id_user: string, id_transaction: string): Promise<void> {
    const transaction = await this.transactionRepository.findById(id_transaction)

    if (!transaction || transaction.id_user !== id_user) throw new AppError(TRANSACTION_ERRORS.NOT_FOUND, 404)

    this.transactionRepository.deleteById(id_transaction)
  }
}

export { DeleteTransactionUseCase }