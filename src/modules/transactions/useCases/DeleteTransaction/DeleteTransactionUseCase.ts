import { TRANSACTION_ERRORS } from '../../errors';
import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class DeleteTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: ITransactionsRepository) { }

  async execute(id_transaction: string): Promise<void> {
    this.transactionRepository.deleteById(id_transaction)
  }
}

export { DeleteTransactionUseCase }