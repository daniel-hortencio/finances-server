import { Router } from 'express'
import CreateUserController from '../../../../modules/users/useCases/RegisterUser/RegisterUserController'

const registerUserRoutes = Router()

registerUserRoutes.post('/', CreateUserController.handle)

export { registerUserRoutes }