import { inject, injectable } from 'tsyringe'

import { IUpdateAccountDTO } from "../../dtos";
import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";

@injectable()
class UpdateAccountUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountRepository: IAccountsRepository) { }

  async execute({
    description,
    value,
    type,
    currency,
    date,
    id_account,
    id_category
  }: IUpdateAccountDTO): Promise<void> {

    this.accountRepository.update(id_account, {
      description,
      value,
      type,
      currency,
      id_category,
      date
    })
  }
}

export { UpdateAccountUseCase }