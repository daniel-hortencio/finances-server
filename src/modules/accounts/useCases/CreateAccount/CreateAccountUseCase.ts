import { inject, injectable } from 'tsyringe'

import { ICreateAccountDTO } from "../../dtos";
import { IAccountsRepository } from "../../repositories/implementations/IAccountsRepository";

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountRepository: IAccountsRepository) { }

  async execute({
    description,
    value,
    type,
    currency,
    date,
    id_user,
    id_category
  }: ICreateAccountDTO): Promise<void> {
    this.accountRepository.create({
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

export { CreateAccountUseCase }