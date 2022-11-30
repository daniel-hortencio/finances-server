import { Router } from 'express'
import ListAccountsByUserIdController from '../../../../modules/accounts/useCases/ListAccountsByUserId/ListAccountsByUserIdController'
import CreateAccountController from '../../../../modules/accounts/useCases/CreateAccount/CreateAccountController'
import DeleteAccountController from '../../../../modules/accounts/useCases/DeleteAccount/DeleteAccountController'
import UpdateAccountController from '../../../../modules/accounts/useCases/UpdateAccount/UpdateAccountController'

const accountsRoutes = Router()

accountsRoutes.get('/', ListAccountsByUserIdController.handle)
accountsRoutes.post('/', CreateAccountController.handle)
accountsRoutes.put('/', UpdateAccountController.handle)
accountsRoutes.delete('/', DeleteAccountController.handle)

export { accountsRoutes }