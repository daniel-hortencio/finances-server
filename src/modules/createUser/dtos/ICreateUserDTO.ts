import { Language } from "shared/enums/languages";
import { Currency } from "../../../shared/enums/currencies";

type ICreateUserDTO = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  language: Language;
  preferred_currency: Currency;
}

export { ICreateUserDTO }