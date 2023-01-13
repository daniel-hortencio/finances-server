import { Language } from "shared/enums/languages";
import { Currency } from "../../../shared/enums/currencies";

type ICreateUserBodyRequest = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  language: Language;
  preferred_currency: Currency;
}

type ICreateUserDTO = Omit<ICreateUserBodyRequest, "confirm_password">

export { ICreateUserDTO, ICreateUserBodyRequest }