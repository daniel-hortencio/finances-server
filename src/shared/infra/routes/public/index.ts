import Router from 'express'
import { registerUserRoutes } from './registerUser.routes'
import { authenticationRoutes } from './authentication.routes'

const public_routes = Router()

public_routes.use("/register-user", registerUserRoutes)
public_routes.use("/auth", authenticationRoutes)

export { public_routes }