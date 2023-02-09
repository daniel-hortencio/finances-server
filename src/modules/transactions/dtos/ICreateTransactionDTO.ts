import { Currency } from "../../../shared/enums/currencies";
import { TransactionType } from "../../../shared/types/Transaction";

type ICreateTransactionDTO = {
  description: string;
  value: number;
  type: TransactionType;
  currency: Currency
  date: string;
  id_user: string;
  id_category?: string;
}

export { ICreateTransactionDTO }