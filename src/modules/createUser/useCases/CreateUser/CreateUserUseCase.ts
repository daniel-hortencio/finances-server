import { inject, injectable } from 'tsyringe'
import { hash } from "bcrypt";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos";
import { IUsersRepository } from "../../../users/repositories/implementations/IUsersRepository";
import { CREATE_USER_ERRORS } from '../../errors';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute({
    email,
    name,
    password,
    confirm_password,
    language,
    preferred_currency
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError(CREATE_USER_ERRORS.ALREADY_EXISTS, 409)
    }

    if (password !== confirm_password) {
      throw new AppError(CREATE_USER_ERRORS.PASSWORD_CONFIRMATION_DOES_NOT_MATCH, 401)
    }

    const passwordHash = await hash(password, 8)

    this.userRepository.create({
      email,
      name,
      password: passwordHash,
      language,
      preferred_currency
    })
  }
}

export { CreateUserUseCase }