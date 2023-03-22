import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import { IUpdateTransactionDTO } from "../../dtos";
import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";
import { TRANSACTION_ERRORS } from '../../errors';

@injectable()
class UpdateTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transaction_repository: ITransactionsRepository) { }

  async execute(
    {
      description,
      value,
      type,
      currency,
      date,
      id_user,
      id_transaction,
      id_category
    }: IUpdateTransactionDTO): Promise<void> {

    console.log({
      description,
      value,
      type,
      currency,
      date,
      id_user,
      id_transaction,
      id_category
    })

    const transaction = await this.transaction_repository.findById(id_transaction)

    if (!transaction || transaction.id_user !== id_user) throw new AppError(TRANSACTION_ERRORS.NOT_FOUND, 404)

    this.transaction_repository.update(id_transaction, {
      description,
      value,
      type,
      currency,
      id_category,
      date
    })
  }
}

export { UpdateTransactionUseCase }