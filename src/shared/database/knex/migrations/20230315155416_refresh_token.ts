import { Knex } from "knex";

const table_name = "refresh_token"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, (table) => {
    table.uuid(`id_${table_name}`).primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.uuid('id_user').references('id_user').inTable('user').unique().notNullable().index();
    table.integer('expires_in').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name)
}

