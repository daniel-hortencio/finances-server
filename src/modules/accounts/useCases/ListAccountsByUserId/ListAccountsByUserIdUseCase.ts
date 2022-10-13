import { inject, injectable } from 'tsyringe'

import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";
import { IGetAccountDTO } from 'modules/accounts/dtos/IGetAccountDTO';

@injectable()
class ListAccountsByUserIdUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountsRepository: IAccountsRepository) { }

  async execute(id_user: string): Promise<IGetAccountDTO[]> {
    const accounts = await this.accountsRepository.list(id_user)

    return accounts;
  }
}

export { ListAccountsByUserIdUseCase }