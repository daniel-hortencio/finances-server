import Router from 'express'
import { createUserRoutes } from './createUser.routes'
import { authenticationRoutes } from './authentication.routes'

const public_routes = Router()

public_routes.use("/create-user", createUserRoutes)
public_routes.use("/auth", authenticationRoutes)

export { public_routes }