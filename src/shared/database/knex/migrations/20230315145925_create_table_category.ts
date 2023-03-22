import { Knex } from "knex";

export const table_name = "category"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, (table) => {
    table.uuid(`id_${table_name}`).primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string('name').notNullable()
    table.string('background_color').defaultTo('#000')
    table.string('icon_color').defaultTo('#fff')
    table.string('icon_name').defaultTo('FiCircle')
    table.string('type').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name)
}

