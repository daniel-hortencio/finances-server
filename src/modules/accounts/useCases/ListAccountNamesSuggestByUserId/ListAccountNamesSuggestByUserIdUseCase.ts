import { inject, injectable } from 'tsyringe'

import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";

@injectable()
class ListAccountNamesSuggestByUserIdUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountsRepository: IAccountsRepository
  ) { }

  async execute(id_user: string): Promise<string[]> {
    const accounts = await this.accountsRepository.list(id_user)

    return accounts.map(account => account.description);
  }
}

export { ListAccountNamesSuggestByUserIdUseCase }