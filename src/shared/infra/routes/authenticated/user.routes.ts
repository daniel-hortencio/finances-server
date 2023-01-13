import { Router } from 'express'
import ListUsersController from '../../../../modules/users/useCases/ListUsers/ListUsersController'
import FindUserByEmailController from '../../../../modules/users/useCases/FindByEmail/FindUserByEmailController'
import FindUserByIdController from '../../../../modules/users/useCases/FindById/FindUserByIdController'
import UpdateUserPreferencesController from '../../../../modules/users/useCases/UpdateUserPreferences/UpdateUserPreferentesController'
import UpdateUserInfosController from '../../../../modules/users/useCases/UpdateUserInfos/UpdateUserInfosController'
import DeleteUserController from '../../../../modules/users/useCases/DeleteUser/DeleteUserController'
import GetBalanceByUserController from '../../../../modules/users/useCases/GetBalanceByUser/GetBalanceByUserController'
import LogoutUserController from '../../../../modules/users/useCases/LogoutUser/LogoutUserController'

const usersRoutes = Router()

usersRoutes.get('/', ListUsersController.handle)
usersRoutes.get('/find-by-email', FindUserByEmailController.handle)
usersRoutes.get('/find-by-id', FindUserByIdController.handle)
usersRoutes.put('/preferences', UpdateUserPreferencesController.handle)
usersRoutes.put('/infos', UpdateUserInfosController.handle)
usersRoutes.delete('/', DeleteUserController.handle)
usersRoutes.get('/balance', GetBalanceByUserController.handle)
usersRoutes.post('/logout', LogoutUserController.handle)

export { usersRoutes }