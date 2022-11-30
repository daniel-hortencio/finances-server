import { IGetExchangeDTO } from "modules/exchanges/dtos";
import { Currency } from "../../../shared/enums/currencies";
import { AccountType } from "../../../shared/types/Account";

type IGetAccountDTO = {
  id_account: string;
  description: string;
  value: number;
  type: AccountType;
  currency: Currency
  date: Date;
  id_user: string;
  id_category?: string;
}

type IGetMovementsDTO = {
  year: number,
  month: number,
  movements: Array<IGetAccountDTO | IGetExchangeDTO>
}

export { IGetAccountDTO, IGetMovementsDTO }