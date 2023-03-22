
import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'

import { IUsersRepository } from '../../../users/repositories/implementations/IUsersRepository';
import { ISignInUserDTO } from '../../dtos';
import { AppError } from '../../../../shared/errors/AppError';
import { AUTH_ERRORS } from '../../errors';
import { generateToken } from '../../services/GenerateToken';
import { generateRefreshToken } from '../../services/GenerateRefreshToken';

@injectable()
class SignInUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute(body: ISignInUserDTO): Promise<any> {
    const { email, password } = body
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (!userAlreadyExists) {
      throw new AppError(AUTH_ERRORS.EMAIL_OR_PASSWORD_IS_INCORRECT, 401)
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new AppError(AUTH_ERRORS.EMAIL_OR_PASSWORD_IS_INCORRECT, 401)
    }

    const token = generateToken.execute(userAlreadyExists.id_user as string)

    const refresh_token = await generateRefreshToken.execute(userAlreadyExists.id_user as string)

    return {
      user: {
        ...userAlreadyExists,
        password: undefined
      },
      token,
      refresh_token
    }
  }
}

export { SignInUseCase }