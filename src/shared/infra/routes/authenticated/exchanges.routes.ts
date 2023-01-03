import { Router } from 'express'
import CreateExchangeController from '../../../../modules/exchanges/useCases/CreateExchange/CreateExchangeController'
import DeleteExchangeController from '../../../../modules/exchanges/useCases/DeleteExchange/DeleteExchangeController'
//import UpdateExchangeController from '../../../../modules/exchanges/useCases/UpdateExchange/UpdateExchangeController'

const exchangesRoutes = Router()

exchangesRoutes.post('/', CreateExchangeController.handle)
exchangesRoutes.delete('/', DeleteExchangeController.handle)
//exchangesRoutes.put('/', UpdateExchangeController.handle)


export { exchangesRoutes }
