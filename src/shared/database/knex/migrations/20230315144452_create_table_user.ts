import { Knex } from "knex";

const table_name = 'user'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, (table) => {
    table.uuid(`id_${table_name}`).primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('language').defaultTo('EN')
    table.string('preferred_currency').defaultTo('US')
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name)
}

