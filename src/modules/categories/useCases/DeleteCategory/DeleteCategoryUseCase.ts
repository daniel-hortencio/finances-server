import { ITransactionsRepository } from '../../../transactions/repositories/implementations/ITransactionsRepository';
import { inject, injectable } from 'tsyringe'

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
    await this.transactionsRepository.deleteCategory(id_category)

    await this.categoryRepository.deleteById(id_category)
  }
}

export { DeleteUserUseCase }