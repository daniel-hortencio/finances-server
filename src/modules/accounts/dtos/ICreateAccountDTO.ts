import { Currency } from "../../../shared/enums/currencies";
import { AccountType } from "../../../shared/types/Account";

type ICreateAccountDTO = {
  description: string;
  value: number;
  type: AccountType;
  currency: Currency
  date: string;
  id_user: string;
  id_category?: string;
}

export { ICreateAccountDTO }