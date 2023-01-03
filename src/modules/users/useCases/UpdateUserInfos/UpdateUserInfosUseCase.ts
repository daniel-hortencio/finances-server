import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUserInfosDTO } from "../../dtos";
import { USER_ERRORS } from "../../errors";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class UpdateUserInfosUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute(id_user: string,
    {
      name
    }: IUpdateUserInfosDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id_user)

    if (!userAlreadyExists) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    this.userRepository.updateInfos(
      id_user,
      {
        name
      }
    )
  }
}

export { UpdateUserInfosUseCase }