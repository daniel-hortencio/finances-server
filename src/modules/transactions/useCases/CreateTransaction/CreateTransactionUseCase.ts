import { inject, injectable } from 'tsyringe'

import { ICreateTransactionDTO } from "../../dtos";
import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionsRepository: ITransactionsRepository) { }

  async execute({
    description,
    value,
    type,
    currency,
    date,
    id_user,
    id_category
  }: ICreateTransactionDTO): Promise<void> {
    this.transactionsRepository.create({
      description,
      value,
      type,
      currency,
      date,
      id_user,
      id_category
    })
  }
}

export { CreateTransactionUseCase }