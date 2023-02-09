import Router from 'express'
import { authMiddleware } from '../../http/middlewares/AuthMiddleware'
import { transactionsRoutes } from './transactions.routes'
import { categoriesRoutes } from './category.routes'
import { exchangesRoutes } from './exchanges.routes'
import { usersRoutes } from './user.routes'

const authenticated_routes = Router()

authenticated_routes.use("/user", authMiddleware, usersRoutes)
authenticated_routes.use("/category", authMiddleware, categoriesRoutes)
authenticated_routes.use("/transaction", authMiddleware, transactionsRoutes)
authenticated_routes.use("/exchange", authMiddleware, exchangesRoutes)

export { authenticated_routes }