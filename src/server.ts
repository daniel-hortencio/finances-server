import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import "express-async-errors"
import { router } from './shared/infra/routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './shared/container'
import { ErrorHandler } from "./shared/errors/ErrorHandler"

const port = process.env.PORT

const api = express()

api.use(express.json())
api.use(cors({
  origin: "*"
}))

api.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

api.use(router)

api.use(ErrorHandler)

api.listen(port, () => console.log(`Finantial server is running on port ${port}`))
