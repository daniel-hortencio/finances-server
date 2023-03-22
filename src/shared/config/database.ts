import { knex as setupKnex, Knex } from 'knex'
import { Environments } from './environments'

export const database_config: Knex.Config = {
  client: 'pg',
  connection: {
    host: Environments.DB.HOST,
    port: Environments.DB.PORT,
    user: Environments.DB.USER,
    password: Environments.DB.PASSWORD,
    database: Environments.DB.DATABASE
  },
  searchPath: ['knex', 'public'],
  migrations: {
    extension: 'ts',
    directory: './src/shared/database/knex/migrations'
  }

}

export const knex = setupKnex(database_config)