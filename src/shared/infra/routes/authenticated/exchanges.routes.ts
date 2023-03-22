import { Router } from 'express'
import CreateExchangeController from '../../../../modules/exchanges/useCases/CreateExchange/CreateExchangeController'
import DeleteExchangeController from '../../../../modules/exchanges/useCases/DeleteExchange/DeleteExchangeController'
import UpdateExchangeController from '../../../../modules/exchanges/useCases/UpdateExchange/UpdateExchangeController'

const exchangesRoutes = Router()

exchangesRoutes.post('/', CreateExchangeController.handle)
exchangesRoutes.delete('/:id_exchange', DeleteExchangeController.handle)
exchangesRoutes.put('/:id_exchange', UpdateExchangeController.handle)


export { exchangesRoutes }
