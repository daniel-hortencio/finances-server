import { IRefreshTokenRepository } from "./implementations/IRefreshTokenRepository";

import { knex } from "../../../shared/config/database";

class RefreshTokenRepository implements IRefreshTokenRepository {
  private readonly table_name = 'refresh_token'

  async findById(id_refresh_token: string) {
    const refresh_token = await knex(this.table_name)
      .where('id_refresh_token', id_refresh_token)
      .first()

    return refresh_token
  }

  async findByUserId(id_user: string) {
    const refresh_token = await knex(this.table_name)
      .where('id_user', id_user)
      .first()

    return refresh_token
  }

  async create(id_user: string, expires_in: number) {
    await this.deleteByUserId(id_user)

    const { id_refresh_token } = await knex(this.table_name).insert({
      id_user,
      expires_in
    }).then(async () => await this.findByUserId(id_user))

    return { id_refresh_token, expires_in }
  }

  async deleteByRefreshTokenId(id_refresh_token: string) {
    await knex(this.table_name)
      .where('id_refresh_token', id_refresh_token)
      .del()
  }

  async deleteByUserId(id_user: string): Promise<void> {
    await knex(this.table_name)
      .where('id_user', id_user)
      .del()
  }
}

export { RefreshTokenRepository }