import { Router } from 'express'
import { isOwnerOfResourceMiddleware } from '../../../../shared/infra/http/middlewares/IsOwnerOfResource'
import CreateExchangeController from '../../useCases/CreateExchange/CreateExchangeController'
import DeleteExchangeController from '../../useCases/DeleteExchange/DeleteExchangeController'
import UpdateExchangeController from '../../useCases/UpdateExchange/UpdateExchangeController'

const exchangesRoutes = Router()

exchangesRoutes.post('/', CreateExchangeController.handle)
exchangesRoutes.delete('/:id_exchange', isOwnerOfResourceMiddleware, DeleteExchangeController.handle)
exchangesRoutes.put('/:id_exchange', isOwnerOfResourceMiddleware, UpdateExchangeController.handle)


export { exchangesRoutes }
