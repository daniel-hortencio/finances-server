import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import "express-async-errors"
import { router } from './shared/infra/routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './shared/container'
import { ErrorHandler } from "./shared/errors/ErrorHandler"

const port = 3006

const server = express()

server.use(express.json())
server.use(cors({
  origin: "*"
}))

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

server.use(router)

server.use(ErrorHandler)

server.listen(port, () => console.log(`Finantial server is running on port ${port}`))
