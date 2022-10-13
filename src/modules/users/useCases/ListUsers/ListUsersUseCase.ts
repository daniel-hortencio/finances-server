import { inject, injectable } from 'tsyringe'

import { IGetUserDTO } from "../../dtos";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute(): Promise<IGetUserDTO[]> {
    const users = await this.usersRepository.list()

    const usersWithoutPassword = users.map(user => {
      const { id_user, name, email, language, preferred_currency, created_at } = user

      return { id_user, name, email, language, preferred_currency, created_at }
    })

    return usersWithoutPassword;
  }
}

export { ListUsersUseCase }