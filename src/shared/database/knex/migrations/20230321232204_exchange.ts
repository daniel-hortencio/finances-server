import { Knex } from "knex";

export const table_name = 'exchange'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, (table) => {
    table.uuid(`id_${table_name}`).primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.decimal('input_value', 16, 2).notNullable()
    table.string('input_currency').notNullable()
    table.decimal('output_value', 16, 2).notNullable()
    table.string('output_currency').notNullable()
    table.string('date').notNullable()
    table.uuid('id_user').references('id_user').inTable('user').notNullable().index();
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name)
}

