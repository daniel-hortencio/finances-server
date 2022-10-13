import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { IGetUserDTO } from "../../dtos";
import { USER_ERRORS } from "../../errors";

import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class FindUserByEmailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute(emailSearch: string): Promise<IGetUserDTO | null> {
    const user = await this.usersRepository.findByEmail(emailSearch)

    if (!user) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    const { id_user, name, email, language, preferred_currency, created_at } = user

    return { id_user, name, email, language, preferred_currency, created_at };
  }
}

export { FindUserByEmailUseCase }