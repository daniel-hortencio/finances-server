import { IGetExchangeDTO } from "modules/exchanges/dtos";
import { Currency } from "../../../shared/enums/currencies";
import { TransactionType } from "../../../shared/types/Transaction";

type IGetTransactionDTO = {
  id_transaction: string;
  description: string;
  value: number;
  type: TransactionType;
  currency: Currency
  date: Date;
  id_user: string;
  id_category?: string;
}

type IGetMovementsDTO = {
  year: number,
  month: number,
  movements: Array<IGetTransactionDTO | IGetExchangeDTO>
}

export { IGetTransactionDTO, IGetMovementsDTO }