import { TransactionType } from "../../../shared/types/Transaction";

type ICreateCategoryDTO = {
  name: string;
  icon_name: string;
  background_color: string;
  icon_color: string;
  id_user: string;
  type: TransactionType
}

export { ICreateCategoryDTO }