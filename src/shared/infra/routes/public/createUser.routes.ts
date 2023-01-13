import { Router } from 'express'
import CreateUserController from '../../../../modules/users/useCases/CreateUser/CreateUserController'

const createUserRoutes = Router()

createUserRoutes.post('/', CreateUserController.handle)

export { createUserRoutes }