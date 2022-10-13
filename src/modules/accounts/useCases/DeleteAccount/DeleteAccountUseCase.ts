import { inject, injectable } from 'tsyringe'

import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";

@injectable()
class DeleteAccountUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountRepository: IAccountsRepository) { }

  async execute(id_account: string): Promise<void> {
    this.accountRepository.delete(id_account)
  }
}

export { DeleteAccountUseCase }