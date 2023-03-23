import { Currency } from "../../../shared/enums/currencies";

type IUpdateExchangeDTO = {
  id_exchange: string,
  input_value: number,
  input_currency: Currency,
  output_value: number,
  output_currency: Currency,
  date: string;
}

export { IUpdateExchangeDTO }