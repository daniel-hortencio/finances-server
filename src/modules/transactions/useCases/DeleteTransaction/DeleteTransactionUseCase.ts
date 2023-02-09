import { inject, injectable } from 'tsyringe'

import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class DeleteTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: ITransactionsRepository) { }

  async execute(id_transaction: string): Promise<void> {
    this.transactionRepository.delete(id_transaction)
  }
}

export { DeleteTransactionUseCase }