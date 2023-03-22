import { Knex } from "knex";
import { table_name } from './20230315145925_create_table_category'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .alterTable(table_name, table => {
      table.uuid('id_user').references('id_user').inTable('user').notNullable().index();
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .alterTable(table_name, table => {
      table.dropColumn('id_user');
    })
}
