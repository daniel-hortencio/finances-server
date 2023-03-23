import { TransactionType } from 'shared/types/Transaction';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO'

class Category {
  id_category?: string;
  name: string;
  background_color: string;
  icon_color: string;
  icon_name: string;
  id_user: string;
  type: TransactionType;

  constructor({
    name,
    background_color,
    icon_color,
    icon_name,
    id_user,
    type
  }: ICreateCategoryDTO) {
    this.name = name
    this.background_color = background_color
    this.icon_color = icon_color
    this.icon_name = icon_name
    this.id_user = id_user
    this.type = type
  }
}

export { Category }