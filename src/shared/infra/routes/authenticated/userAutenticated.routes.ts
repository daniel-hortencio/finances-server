import Router from 'express'
import { authMiddleware } from '../../http/middlewares/AuthMiddleware'
import { transactionsRoutes } from '../../../../modules/transactions/http/routes/transactions.routes'
import { categoriesRoutes } from '../../../../modules/categories/http/routes/category.routes'
import { exchangesRoutes } from '../../../../modules/exchanges/http/routes/exchanges.routes'
import { usersRoutes } from '../../../../modules/users/http/routes/user.routes'

const user_authenticated_routes = Router()

user_authenticated_routes.use("/user", authMiddleware, usersRoutes)
user_authenticated_routes.use("/category", authMiddleware, categoriesRoutes)
user_authenticated_routes.use("/transaction", authMiddleware, transactionsRoutes)
user_authenticated_routes.use("/exchange", authMiddleware, exchangesRoutes)

export { user_authenticated_routes }