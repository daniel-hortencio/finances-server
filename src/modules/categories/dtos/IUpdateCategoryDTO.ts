import { TransactionType } from "../../../shared/types/Transaction";

type IUpdateCategoryDTO = {
  name: string;
  background_color: string;
  icon_color: string;
  icon_name: string;
  type: TransactionType
}

export { IUpdateCategoryDTO }