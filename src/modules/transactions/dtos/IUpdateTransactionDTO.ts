import { Currency } from "../../../shared/enums/currencies";
import { TransactionType } from "../../../shared/types/Transaction";

type IUpdateTransactionDTO = {
  description: string;
  value: number;
  type: TransactionType;
  currency: Currency
  date: string;
  id_user: string;
  id_transaction: string;
  id_category?: string;
}

export { IUpdateTransactionDTO }