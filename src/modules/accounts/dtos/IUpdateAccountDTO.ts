import { Currency } from "../../../shared/enums/currencies";
import { AccountType } from "../../../shared/types/Account";

type IUpdateAccountDTO = {
  description: string;
  value: number;
  type: AccountType;
  currency: Currency
  date: Date;
  id_category?: string;
}

export { IUpdateAccountDTO }