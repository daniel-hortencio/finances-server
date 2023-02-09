import { inject, injectable } from 'tsyringe'

import { ITransactionsRepository } from "../../repositories/implementations/ITransactionsRepository";

@injectable()
class ListTransactionNamesSuggestByUserIdUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) { }

  async execute(id_user: string): Promise<string[]> {
    let names_suggest: string[] = []

    const transactions = await this.transactionsRepository.list(id_user)

    transactions.forEach(transaction => {
      if (!names_suggest.some(name_suggest => name_suggest === transaction.description as string)) {
        names_suggest.push(transaction.description)
      }
    });

    return names_suggest.sort();
  }
}

export { ListTransactionNamesSuggestByUserIdUseCase }