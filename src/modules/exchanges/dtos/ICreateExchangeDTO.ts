import { Currency } from "../../../shared/enums/currencies";

type ICreateExchangeDTO = {
  input_value: number,
  input_currency: Currency,
  output_value: number,
  output_currency: Currency,
  date: string;
  id_user: string;
}

export { ICreateExchangeDTO }