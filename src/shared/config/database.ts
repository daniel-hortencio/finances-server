import { knex as setupKnex, Knex } from 'knex'
import Postgres from 'pg'
import { Environments } from './environments'

Postgres.types.setTypeParser(Postgres.types.builtins.INT8, (value: any) => {
  return parseInt(value, 10);
});

Postgres.types.setTypeParser(Postgres.types.builtins.FLOAT8, (value: any) => {
  return parseFloat(value);
});

Postgres.types.setTypeParser(Postgres.types.builtins.NUMERIC, (value: any) => {
  return parseFloat(value);
});

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