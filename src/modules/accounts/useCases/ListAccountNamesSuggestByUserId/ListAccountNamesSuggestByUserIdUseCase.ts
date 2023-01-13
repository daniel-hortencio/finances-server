import { inject, injectable } from 'tsyringe'

import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";

@injectable()
class ListAccountNamesSuggestByUserIdUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountsRepository: IAccountsRepository
  ) { }

  async execute(id_user: string): Promise<string[]> {
    let names_suggest: string[] = []

    const accounts = await this.accountsRepository.list(id_user)

    accounts.forEach(account => {
      if (!names_suggest.some(name_suggest => name_suggest === account.description as string)) {
        names_suggest.push(account.description)
      }
    });

    return names_suggest.sort();
  }
}

export { ListAccountNamesSuggestByUserIdUseCase }