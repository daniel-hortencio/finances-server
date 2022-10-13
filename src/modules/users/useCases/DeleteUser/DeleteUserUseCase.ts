import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { USER_ERRORS } from '../../errors';
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute(id: string): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id)

    if (!userAlreadyExists) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    this.userRepository.delete(id)
  }
}

export { DeleteUserUseCase }