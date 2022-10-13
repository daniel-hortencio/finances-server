import { prismaClient } from "../../../prisma";
import { Category } from "../entities/Category";
import { ICategoriesRepository } from "./implementations/ICategoriesRepository";
import {
  ICreateCategoryDTO,
  IUpdateCategoryDTO
} from '../dtos'

class CategoriesRepository implements ICategoriesRepository {
  private allCategories: Category[];
  private static INSTANCE: CategoriesRepository;

  constructor() {
    this.allCategories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  async list(id_user: string) {
    this.allCategories = await prismaClient.categories.findMany({
      where: {
        id_user
      }
    })

    return this.allCategories
  }

  async findById(id_category: string) {
    const category = await prismaClient.categories.findFirst({
      where: {
        id_category
      }
    })

    return category
  }

  async findByName(id_user: string, name: string): Promise<Category | null> {
    const category = await prismaClient.categories.findFirst({
      where: {
        AND: {
          id_user,
          name
        }
      }
    })

    return category
  }

  async create({
    id_user,
    name,
    icon_name,
    background_color,
    icon_color
  }: ICreateCategoryDTO) {
    const newCategory = new Category({
      name,
      icon_name,
      background_color,
      icon_color,
      id_user
    })

    await prismaClient.categories.create({
      data: newCategory
    })
  }

  async update(
    id_category: string,
    {
      name,
      icon_name,
      background_color,
      icon_color
    }: IUpdateCategoryDTO) {

    await prismaClient.categories.update({
      where: {
        id_category
      },
      data: {
        name,
        icon_name,
        background_color,
        icon_color
      }
    })
  }

  async delete(id_category: string) {
    await prismaClient.categories.delete({
      where: {
        id_category
      }
    })
  }
}

export { CategoriesRepository }