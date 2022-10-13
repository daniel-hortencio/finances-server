import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateCategoryDTO } from "../../dtos";
import { CATEGORY_ERRORS } from "../../errors";
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
      icon_color
    }: IUpdateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findById(id_category)

    if (!categoryAlreadyExists) {
      throw new AppError(CATEGORY_ERRORS.NOT_FOUND, 404)
    }

    this.categoryRepository.update(
      id_category,
      {
        name,
        icon_name,
        background_color,
        icon_color
      }
    )
  }
}

export { UpdateUserUseCase }