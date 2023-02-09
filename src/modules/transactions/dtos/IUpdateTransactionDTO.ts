import { Currency } from "../../../shared/enums/currencies";
import { TransactionType } from "../../../shared/types/Transaction";

type IUpdateTransactionDTO = {
  id_transaction: string;
  description: string;
  value: number;
  type: TransactionType;
  currency: Currency
  date: string;
  id_category?: string;
}

export { IUpdateTransactionDTO }