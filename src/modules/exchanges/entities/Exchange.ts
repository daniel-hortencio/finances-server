import { ICreateExchangeDTO } from "../dtos";

class Exchange {
  id_exchange?: string;
  input_value: number;
  input_currency: string;
  output_value: number;
  output_currency: string;
  date: Date;
  id_user: string;

  constructor({
    input_value,
    input_currency,
    output_value,
    output_currency,
    date,
    id_user
  }: ICreateExchangeDTO) {
    this.input_value = input_value
    this.input_currency = input_currency
    this.output_value = output_value;
    this.output_currency = output_currency
    this.id_user = id_user
    this.date = new Date(date)
  }
}

export { Exchange }