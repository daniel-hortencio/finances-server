import { Router } from 'express'
import ListUsersController from '../../useCases/ListUsers/ListUsersController'
import FindUserByEmailController from '../../useCases/FindByEmail/FindUserByEmailController'
import FindUserByIdController from '../../useCases/FindById/FindUserByIdController'
import UpdateUserPreferencesController from '../../useCases/UpdateUserPreferences/UpdateUserPreferentesController'
import UpdateUserInfosController from '../../useCases/UpdateUserInfos/UpdateUserInfosController'
import DeleteUserController from '../../useCases/DeleteUser/DeleteUserController'
import GetBalanceByUserController from '../../useCases/GetBalanceByUser/GetBalanceByUserController'
import LogoutUserController from '../../useCases/LogoutUser/LogoutUserController'

const usersRoutes = Router()

usersRoutes.get('/', ListUsersController.handle)
usersRoutes.get('/find-by-email/:email', FindUserByEmailController.handle)
usersRoutes.get('/find-by-id/:id_user', FindUserByIdController.handle)
usersRoutes.patch('/preferences', UpdateUserPreferencesController.handle)
usersRoutes.patch('/infos', UpdateUserInfosController.handle)
usersRoutes.delete('/', DeleteUserController.handle)
usersRoutes.get('/balance', GetBalanceByUserController.handle)
usersRoutes.post('/logout', LogoutUserController.handle)

export { usersRoutes }