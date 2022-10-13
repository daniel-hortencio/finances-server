import { Router } from 'express'
import CreateUserController from '../../../../modules/createUser/useCases/CreateUser/CreateUserController'

const createUserRoutes = Router()

createUserRoutes.post('/', CreateUserController.handle)

export { createUserRoutes }