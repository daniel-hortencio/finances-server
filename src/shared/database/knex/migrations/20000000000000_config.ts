import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .raw(
      `
      CREATE SCHEMA IF NOT EXISTS "public";

      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";     
    `,
    )
    .then(() => {
      console.log(`Configurações feita com sucesso!`);
    });
}

export async function down(_knex: Knex): Promise<void> { }
