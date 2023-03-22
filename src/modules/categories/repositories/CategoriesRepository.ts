import { knex } from "../../../shared/config/database";
import { Category } from "../entities/Category";
import { ICategoriesRepository } from "./implementations/ICategoriesRepository";
import {
  ICreateCategoryDTO,
  IUpdateCategoryDTO
} from '../dtos'

class CategoriesRepository implements ICategoriesRepository {
  private allCategories: Category[];
  private readonly table_name = 'category'

  constructor() {
    this.allCategories = []
  }

  async list(id_user: string) {
    this.allCategories = await knex(this.table_name)
      .where('id_user', id_user)
      .select()

    return this.allCategories
  }

  async findById(id_category: string) {
    const category = await knex(this.table_name)
      .where('id_category', id_category)
      .first()

    return category
  }

  async findByName(id_user: string, name: string): Promise<Category | null> {
    const category = await knex(this.table_name)
      .where({ id_user, name })
      .first()

    return category
  }

  async create({
    id_user,
    name,
    icon_name,
    background_color,
    icon_color,
    type
  }: ICreateCategoryDTO) {
    await knex(this.table_name).insert({
      name,
      icon_name,
      background_color,
      icon_color,
      id_user,
      type
    })
  }

  async update(
    id_category: string,
    {
      name,
      icon_name,
      background_color,
      icon_color,
      type
    }: IUpdateCategoryDTO) {

    await knex(this.table_name)
      .where('id_category', id_category)
      .update({
        name,
        icon_name,
        background_color,
        icon_color,
        type
      })
  }

  async deleteById(id_category: string) {
    await knex(this.table_name)
      .where('id_category', id_category)
      .del()
  }

  async deleteAllByUserId(id_user: string) {
    await knex(this.table_name)
      .where('id_user', id_user)
      .del()
  }
}

export { CategoriesRepository }