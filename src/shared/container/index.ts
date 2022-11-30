import { container } from 'tsyringe'

import { IUsersRepository } from '../../modules/users/repositories/implementations/IUsersRepository'
import { UsersRepository } from '../../modules/users/repositories/UsersRepository'
import { ICategoriesRepository } from '../../modules/categories/repositories/implementations/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/categories/repositories/CategoriesRepository'
import { AccountsRepository } from '../../modules/accounts/repositories/AccountsRepository'
import { IAccountsRepository } from '../../modules/accounts/repositories/implementations/IAccountsRepository'
import { RefreshTokenRepository } from '../../modules/auth/repositories/RefreshTokenRepository'
import { IRefreshTokenRepository } from '../../modules/auth/repositories/implementations/IRefreshTokenRepository'
import { IExchangesRepository } from '../../modules/exchanges/repositories/implementations/IExchangesRepository'
import { ExchangesRepository } from '../../modules/exchanges/repositories/ExchangesRepository'

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<IAccountsRepository>(
  "AccountsRepository",
  AccountsRepository
)

container.registerSingleton<IRefreshTokenRepository>(
  "RefreshTokenRepository",
  RefreshTokenRepository
)

container.registerSingleton<IExchangesRepository>(
  "ExchangesRepository",
  ExchangesRepository
)