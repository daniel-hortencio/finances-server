import { Router } from 'express'
import ListTransactionsByUserIdController from '../../../../modules/transactions/useCases/ListTransactionByUserId/ListTransactionByUserIdController'
import CreateTransactionController from '../../../../modules/transactions/useCases/CreateTransaction/CreateTransactionController'
import DeleteTransactionController from '../../../../modules/transactions/useCases/DeleteTransaction/DeleteTransactionController'
import UpdateTransactionController from '../../../../modules/transactions/useCases/UpdateTransaction/UpdateTransactiontController'
import ListTransactionNamesSuggestByUserIdController from '../../../../modules/transactions/useCases/ListTransacionNamesSuggestByUserId/ListTransactionNamesSuggestByUserIdController'

const transactionsRoutes = Router()

transactionsRoutes.get('/', ListTransactionsByUserIdController.handle)
transactionsRoutes.get('/names-suggest', ListTransactionNamesSuggestByUserIdController.handle)
transactionsRoutes.post('/', CreateTransactionController.handle)
transactionsRoutes.put('/:id_transaction', UpdateTransactionController.handle)
transactionsRoutes.delete('/:id_transaction', DeleteTransactionController.handle)

export { transactionsRoutes }