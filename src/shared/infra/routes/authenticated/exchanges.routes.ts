import { Router } from 'express'
import CreateAccountController from '../../../../modules/exchanges/useCases/CreateExchange/CreateExchangeController'
import DeleteAccountController from '../../../../modules/accounts/useCases/DeleteAccount/DeleteAccountController'
import UpdateAccountController from '../../../../modules/accounts/useCases/UpdateAccount/UpdateAccountController'
import ListExchangesByUserIdController from '../../../../modules/exchanges/useCases/ListExchangesByUserId/ListExchangesByUserIdController'

const exchangesRoutes = Router()

//exchangesRoutes.get('/', ListExchangesByUserIdController.handle)
exchangesRoutes.post('/', CreateAccountController.handle)
//exchangesRoutes.put('/', UpdateAccountController.handle)
//exchangesRoutes.delete('/', DeleteAccountController.handle)

export { exchangesRoutes }