import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import "express-async-errors"
import { router } from './shared/infra/routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import dotenv from 'dotenv'

import './shared/container'
import { ErrorHandler } from "./shared/errors/ErrorHandler"
import { Environments } from "./shared/config/environments"

const api = express()
dotenv.config()

api.use(express.json())
api.use(cors({
  origin: "*"
}))

api.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

api.use(router)
api.use('/', async (req, res) => {
  res.send(`Finantial server is up!`)
})

api.use(ErrorHandler)

api.listen(Environments.API_PORT, () => console.log(`Finantial server is running on port ${Environments.API_PORT}`))
