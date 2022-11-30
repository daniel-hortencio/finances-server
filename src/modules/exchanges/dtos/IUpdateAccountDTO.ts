import { Currency } from "../../../shared/enums/currencies";
import { AccountType } from "../../../shared/types/Account";

type IUpdateAccountDTO = {
  id_account: string;
  description: string;
  value: number;
  type: AccountType;
  currency: Currency
  date: string;
  id_category?: string;
}

export { IUpdateAccountDTO }