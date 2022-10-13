import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCategoryDTO } from "../../dtos";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";
import { CATEGORY_ERRORS } from '../../errors';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) { }

  async execute({
    name,
    background_color,
    icon_color,
    icon_name,
    id_user,
  }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(id_user, name)

    if (categoryAlreadyExists?.name === name) {
      throw new AppError(CATEGORY_ERRORS.ALREADY_EXISTS, 409)
    }

    this.categoryRepository.create({
      name,
      background_color,
      icon_color,
      icon_name,
      id_user,
    })
  }
}

export { CreateCategoryUseCase }