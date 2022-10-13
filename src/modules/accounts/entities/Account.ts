import { ICreateAccountDTO } from '../dtos'

class Account {
  id_account?: string;
  description: string;
  value: number;
  type: string;
  currency: string;
  date: Date;
  id_user: string;
  id_category: string;

  constructor({
    description,
    value,
    currency,
    type,
    date,
    id_user,
    id_category = ""
  }: ICreateAccountDTO) {
    this.description = description
    this.value = value
    this.type = type;
    this.currency = currency
    this.id_user = id_user
    this.id_category = id_category

    this.date = new Date(date)
  }
}

export { Account }