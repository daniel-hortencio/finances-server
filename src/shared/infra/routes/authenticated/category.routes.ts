import { Router } from 'express'
import ListCategoriesByUserIdController from '../../../../modules/categories/useCases/ListCategoriesByUserId/ListCategoriesByUserIdController'
import CreateUserController from '../../../../modules/categories/useCases/CreateCategory/CreateCategoryController'
import UpdateCategoryController from '../../../../modules/categories/useCases/UpdateCategory/UpdateCategoryController'
import DeleteCategoryController from '../../../../modules/categories/useCases/DeleteCategory/DeleteCategoryController'

const categoriesRoutes = Router()

categoriesRoutes.get('/', ListCategoriesByUserIdController.handle)
categoriesRoutes.post('/', CreateUserController.handle)
categoriesRoutes.put('/', UpdateCategoryController.handle)
categoriesRoutes.delete('/', DeleteCategoryController.handle)

export { categoriesRoutes }