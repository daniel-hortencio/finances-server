import { ITransactionsRepository } from '../../../transactions/repositories/implementations/ITransactionsRepository';
import { inject, injectable } from 'tsyringe'

import { AppError } from "../../../../shared/errors/AppError";
import { CATEGORY_ERRORS } from "../../errors";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository,
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) { }

  async execute(id_user: string, id_category: string): Promise<void> {
    const category_already_exists = await this.categoryRepository.findById(id_category)

    if (!category_already_exists || category_already_exists.id_user !== id_user) {
      throw new AppError(CATEGORY_ERRORS.NOT_FOUND, 404)
    }

    await this.transactionsRepository.deleteCategory(id_category)

    await this.categoryRepository.deleteById(id_category)
  }
}

export { DeleteUserUseCase }