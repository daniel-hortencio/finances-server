import { IRefreshTokenRepository } from '../../../auth/repositories/implementations/IRefreshTokenRepository';
import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { USER_ERRORS } from '../../errors';
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";
import { ICategoriesRepository } from '../../../categories/repositories/implementations/ICategoriesRepository';
import { ITransactionsRepository } from 'modules/transactions/repositories/implementations/ITransactionsRepository';
import { IExchangesRepository } from 'modules/exchanges/repositories/implementations/IExchangesRepository';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private user_repository: IUsersRepository,
    @inject("RefreshTokenRepository")
    private refresh_token_repository: IRefreshTokenRepository,
    @inject("TransactionsRepository")
    private transaction_repository: ITransactionsRepository,
    @inject("ExchangesRepository")
    private exchange_repository: IExchangesRepository,
    @inject("CategoriesRepository")
    private category_repository: ICategoriesRepository
  ) { }

  async execute(id_user: string): Promise<void> {
    const user_already_exists = await this.user_repository.findById(id_user)

    if (!user_already_exists) {
      throw new AppError(USER_ERRORS.NOT_FOUND, 404)
    }

    await this.refresh_token_repository.deleteByUserId(id_user)

    await this.transaction_repository.deleteAllByUserId(id_user)

    await this.exchange_repository.deleteAllByUserId(id_user)

    await this.category_repository.deleteAllByUserId(id_user)

    this.user_repository.delete(id_user)
  }
}

export { DeleteUserUseCase }