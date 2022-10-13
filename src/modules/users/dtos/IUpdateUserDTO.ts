import { Language } from "shared/enums/languages";
import { Currency } from "../../../shared/enums/currencies";

type IUpdateUserDTO = {
  name: string;
  password: string;
  language: Language;
  preferred_currency: Currency;
}

export { IUpdateUserDTO }