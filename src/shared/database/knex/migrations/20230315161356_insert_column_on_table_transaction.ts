import { Knex } from "knex";
import { table_name } from './20230315145045_create_table_transaction'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .alterTable(table_name, table => {
      table.uuid('id_user').references('id_user').inTable('user').notNullable().index();
      table.string('id_category');
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .alterTable(table_name, table => {
      table.dropColumns('id_user', 'id_category');
    })
}
