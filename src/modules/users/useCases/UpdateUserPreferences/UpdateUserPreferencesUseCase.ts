import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUserPreferencesDTO } from "../../dtos";
import { USER_ERRORS } from "../../errors";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class UpdateUserPreferencesUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute(id_user: string,
    {
      language,
      preferred_currency
    }: IUpdateUserPreferencesDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id_user)

    if (!userAlreadyExists) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    this.userRepository.updatePreferences(
      id_user,
      {
        language,
        preferred_currency
      }
    )
  }
}

export { UpdateUserPreferencesUseCase }