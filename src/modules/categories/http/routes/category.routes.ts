import { Router } from 'express'
import ListCategoriesByUserIdController from '../../useCases/ListCategoriesByUserId/ListCategoriesByUserIdController'
import CreateUserController from '../../useCases/CreateCategory/CreateCategoryController'
import UpdateCategoryController from '../../useCases/UpdateCategory/UpdateCategoryController'
import DeleteCategoryController from '../../useCases/DeleteCategory/DeleteCategoryController'
import { isOwnerOfResourceMiddleware } from '../../../../shared/infra/http/middlewares/IsOwnerOfResource'

const categoriesRoutes = Router()

categoriesRoutes.get('/', ListCategoriesByUserIdController.handle)
categoriesRoutes.post('/', CreateUserController.handle)
categoriesRoutes.put('/:id_category', isOwnerOfResourceMiddleware, UpdateCategoryController.handle)
categoriesRoutes.delete('/:id_category', isOwnerOfResourceMiddleware, DeleteCategoryController.handle)

export { categoriesRoutes }