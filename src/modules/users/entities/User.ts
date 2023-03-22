import { Currency } from '../../../shared/enums/currencies';
import { Language } from '../../../shared/enums/languages';
import { ICreateUserDTO } from '../dtos';
class User {
  id_user?: string;
  name: string;
  email: string;
  password: string;
  language: string;
  created_at: Date;
  preferred_currency: string

  constructor({
    name,
    email,
    password,
    language = Language.ENG,
    preferred_currency = Currency.US
  }: ICreateUserDTO) {
    this.name = name
    this.email = email
    this.password = password
    this.language = language
    this.created_at = new Date()
    this.preferred_currency = preferred_currency
  }
}

export { User }