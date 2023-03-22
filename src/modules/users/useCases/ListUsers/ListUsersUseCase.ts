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

    return users;
  }
}

export { ListUsersUseCase }