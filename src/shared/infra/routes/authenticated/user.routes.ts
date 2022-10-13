import { Router } from 'express'
import ListUsersController from '../../../../modules/users/useCases/ListUsers/ListUsersController'
import FindUserByEmailController from '../../../../modules/users/useCases/FindByEmail/FindUserByEmailController'
import FindUserByIdController from '../../../../modules/users/useCases/FindById/FindUserByIdController'
import UpdateUserController from '../../../../modules/users/useCases/UpdateUser/UpdateUserController'
import DeleteUserController from '../../../../modules/users/useCases/DeleteUser/DeleteUserController'
import GetBalanceByUserController from '../../../../modules/users/useCases/GetBalanceByUser/GetBalanceByUserController'

const usersRoutes = Router()

usersRoutes.get('/', ListUsersController.handle)
usersRoutes.get('/find-by-email', FindUserByEmailController.handle)
usersRoutes.get('/find-by-id', FindUserByIdController.handle)
usersRoutes.put('/', UpdateUserController.handle)
usersRoutes.delete('/', DeleteUserController.handle)
usersRoutes.get('/balance', GetBalanceByUserController.handle)

export { usersRoutes }