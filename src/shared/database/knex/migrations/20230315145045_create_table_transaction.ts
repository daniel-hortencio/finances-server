import { Knex } from "knex";

export const table_name = 'transaction'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, (table) => {
    table.uuid(`id_${table_name}`).primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string('description').notNullable()
    table.decimal('value', 16, 2).notNullable()
    table.string('type').notNullable()
    table.string('currency').notNullable()
    table.string('date').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name)
}

