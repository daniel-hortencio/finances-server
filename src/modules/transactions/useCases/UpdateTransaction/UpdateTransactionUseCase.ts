import { inject, injectable } from 'tsyringe'

import { IUpdateTransactionDTO } from "../../dtos";
import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class UpdateTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository) { }

  async execute({
    description,
    value,
    type,
    currency,
    date,
    id_transaction,
    id_category
  }: IUpdateTransactionDTO): Promise<void> {

    this.transactionsRepository.update(id_transaction, {
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