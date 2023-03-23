import { inject, injectable } from 'tsyringe'

import { IUpdateCategoryDTO } from "../../dtos";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) { }

  async execute(
    id_category: string,
    {
      name,
      icon_name,
      background_color,
      icon_color,
      type
    }: IUpdateCategoryDTO): Promise<void> {
    this.categoryRepository.update(
      id_category,
      {
        name,
        icon_name,
        background_color,
        icon_color,
        type
      }
    )
  }
}

export { UpdateUserUseCase }