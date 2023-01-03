import { Language } from "shared/enums/languages";
import { Currency } from "../../../shared/enums/currencies";

type IUpdateUserPreferencesDTO = {
  language: Language;
  preferred_currency: Currency;
}

export { IUpdateUserPreferencesDTO }