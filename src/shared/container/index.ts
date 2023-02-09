import { container } from 'tsyringe'

import { IUsersRepository } from '../../modules/users/repositories/implementations/IUsersRepository'
import { UsersRepository } from '../../modules/users/repositories/UsersRepository'
import { ICategoriesRepository } from '../../modules/categories/repositories/implementations/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/categories/repositories/CategoriesRepository'
import { TransactionsRepository } from '../../modules/transactions/repositories/TransactionsRepository'
import { ITransactionsRepository } from '../../modules/transactions/repositories/implementations/ITransactionsRepository'
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

container.registerSingleton<ITransactionsRepository>(
  "TransactionsRepository",
  TransactionsRepository
)

container.registerSingleton<IRefreshTokenRepository>(
  "RefreshTokenRepository",
  RefreshTokenRepository
)

container.registerSingleton<IExchangesRepository>(
  "ExchangesRepository",
  ExchangesRepository
)