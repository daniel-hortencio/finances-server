import { Currency } from "../../../shared/enums/currencies";

type BalanceByCurrency = {
  value: number;
  currency: Currency;
}

type IGetBalanceDTO = {
  id_user: string;
  balances: BalanceByCurrency[]
}

export { IGetBalanceDTO }