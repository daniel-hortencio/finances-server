import { inject, injectable } from 'tsyringe'

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

@injectable()
class ListCategoriesByUserIdUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) { }

  async execute(id_user: string): Promise<Category[]> {
    const categories = await this.categoriesRepository.list(id_user)

    return categories;
  }
}

export { ListCategoriesByUserIdUseCase }