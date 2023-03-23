import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../../../../shared/errors/AppError'
import { container } from 'tsyringe'
import { ITransactionsRepository } from '../../../../../modules/transactions/repositories/implementations/ITransactionsRepository'
import { TRANSACTION_ERRORS } from '../../../../../modules/transactions/errors'
import { CATEGORY_ERRORS } from '../../../../../modules/categories/errors'
import { ICategoriesRepository } from '../../../../../modules/categories/repositories/implementations/ICategoriesRepository'
import { IExchangesRepository } from '../../../../../modules/exchanges/repositories/implementations/IExchangesRepository'
import { EXCHANGE_ERRORS } from '../../../../../modules/exchanges/errors'

interface IVerify {
  repository: any,
  id_user: string,
  id_resource: string,
  error_message: CATEGORY_ERRORS | TRANSACTION_ERRORS | EXCHANGE_ERRORS
}

const verify_if_is_owner_of_resource = async ({
  repository,
  id_user,
  id_resource,
  error_message
}: IVerify) => {
  const resource_already_exists = await repository.findById(id_resource)

  if (!resource_already_exists || resource_already_exists.id_user !== id_user) {
    throw new AppError(error_message, 404)
  }
}

export async function isOwnerOfResourceMiddleware(req: Request, res: Response, next: NextFunction) {
  const { id_user } = req.auth
  const { baseUrl, params } = req

  const resource = baseUrl.split('/')[1] as 'category' | 'transaction' | 'exchange'
  const id_resource = params[`id_${resource}`]

  switch (resource) {
    case 'category': {
      const category_repository = container.resolve<ICategoriesRepository>('CategoriesRepository');

      await verify_if_is_owner_of_resource({
        repository: category_repository,
        id_user,
        id_resource,
        error_message: CATEGORY_ERRORS.NOT_FOUND
      })

      break;
    }

    case 'transaction': {
      const transaction_repository = container.resolve<ITransactionsRepository>('TransactionsRepository');

      await verify_if_is_owner_of_resource({
        repository: transaction_repository,
        id_user,
        id_resource,
        error_message: TRANSACTION_ERRORS.NOT_FOUND
      })

      break;
    }

    case 'exchange': {
      const exchange_repository = container.resolve<IExchangesRepository>('ExchangesRepository');

      await verify_if_is_owner_of_resource({
        repository: exchange_repository,
        id_user,
        id_resource,
        error_message: EXCHANGE_ERRORS.NOT_FOUND
      })

      break;
    }
  }

  next()
}
