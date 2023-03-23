import { Router } from 'express'
import ListTransactionsByUserIdController from '../../useCases/ListTransactionByUserId/ListTransactionByUserIdController'
import CreateTransactionController from '../../useCases/CreateTransaction/CreateTransactionController'
import DeleteTransactionController from '../../useCases/DeleteTransaction/DeleteTransactionController'
import UpdateTransactionController from '../../useCases/UpdateTransaction/UpdateTransactiontController'
import ListTransactionNamesSuggestByUserIdController from '../../useCases/ListTransacionNamesSuggestByUserId/ListTransactionNamesSuggestByUserIdController'
import { isOwnerOfResourceMiddleware } from '../../../../shared/infra/http/middlewares/IsOwnerOfResource'

const transactionsRoutes = Router()

transactionsRoutes.get('/', ListTransactionsByUserIdController.handle)
transactionsRoutes.get('/names-suggest', ListTransactionNamesSuggestByUserIdController.handle)
transactionsRoutes.post('/', CreateTransactionController.handle)
transactionsRoutes.put('/:id_transaction', isOwnerOfResourceMiddleware, UpdateTransactionController.handle)
transactionsRoutes.delete('/:id_transaction', isOwnerOfResourceMiddleware, DeleteTransactionController.handle)

export { transactionsRoutes }