import { Category } from '../../entities/Category'
import {
  ICreateCategoryDTO,
  IUpdateCategoryDTO
} from '../../dtos'

interface ICategoriesRepository {
  list(id_user: string): Promise<Category[]>;
  findById(id_category: string): Promise<Category | null>;
  findByName(id_user: string, name: string): Promise<Category | null>;
  create(body: ICreateCategoryDTO): Promise<void>;
  update(id_category: string, body: IUpdateCategoryDTO): Promise<void>;
  delete(id_category: string): Promise<void>;
}

export { ICategoriesRepository }