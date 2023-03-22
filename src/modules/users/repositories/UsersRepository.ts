import { User } from "../entities/User";
import { IUsersRepository } from "./implementations/IUsersRepository";
import {
  ICreateUserDTO,
  IUpdateUserInfosDTO,
  IUpdateUserPreferencesDTO
} from '../dtos'
import { knex } from "../../../shared/config/database";

class UsersRepository implements IUsersRepository {
  private allUsers: User[];
  private readonly table_name = 'user'

  constructor() {
    this.allUsers = []
  }

  async list() {
    this.allUsers = await knex.column([
      "id_user",
      "name",
      "email",
      "language",
      "preferred_currency",
      "created_at"
    ])
      .select()
      .from(this.table_name)

    return this.allUsers
  }

  async create({
    email,
    name,
    password,
    language,
    preferred_currency
  }: ICreateUserDTO) {
    await knex(this.table_name).insert({
      email,
      name,
      password,
      language,
      preferred_currency
    })
  }

  async findByEmail(email: string) {
    const user = await knex(this.table_name)
      .where('email', email)
      .first()

    return user
  }

  async findById(id_user: string) {
    const user = await knex(this.table_name)
      .where('id_user', id_user)
      .first()

    return user
  }

  async updatePreferences(
    id_user: string,
    {
      language,
      preferred_currency
    }: IUpdateUserPreferencesDTO) {

    await knex(this.table_name)
      .where('id_user', id_user)
      .update({
        language,
        preferred_currency
      })
  }

  async updateInfos(
    id_user: string,
    {
      name
    }: IUpdateUserInfosDTO) {

    await knex(this.table_name)
      .where('id_user', id_user)
      .update({
        name
      })
  }

  async delete(id_user: string) {
    await knex(this.table_name)
      .where('id_user', id_user)
      .del()
  }
}

export { UsersRepository }