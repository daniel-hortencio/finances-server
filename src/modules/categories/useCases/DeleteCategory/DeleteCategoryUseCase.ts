import { ITransactionsRepository } from 'modules/transactions/repositories/implementations/ITransactionsRepository';
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

  async execute(id_category: string): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findById(id_category)

    if (!categoryAlreadyExists) {
      throw new AppError(CATEGORY_ERRORS.ALREADY_EXISTS, 409)
    }

    await this.transactionsRepository.deleteCategory(id_category)

    await this.categoryRepository.delete(id_category)
  }
}

export { DeleteUserUseCase }