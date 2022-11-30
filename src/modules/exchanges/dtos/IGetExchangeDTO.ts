import { Currency } from "../../../shared/enums/currencies";

type IGetExchangeDTO = {
  id_exchange: string;
  input_value: number;
  input_currency: Currency;
  output_value: number;
  output_currency: Currency;
  date: Date;
  id_user: string;
}

type IGetExchangesListDTO = {
  year: number;
  month: number;
  exchanges: IGetExchangeDTO[]
}

export { IGetExchangeDTO, IGetExchangesListDTO }