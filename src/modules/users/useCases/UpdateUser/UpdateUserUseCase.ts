import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUserDTO } from "../../dtos";
import { USER_ERRORS } from "../../errors";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute(id_user: string,
    {
      name,
      password,
      language,
      preferred_currency
    }: IUpdateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id_user)

    if (!userAlreadyExists) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    this.userRepository.update(
      id_user,
      {
        name,
        password,
        language,
        preferred_currency
      }
    )
  }
}

export { UpdateUserUseCase }