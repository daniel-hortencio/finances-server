"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const currencies_1 = require("../../../shared/enums/currencies");
const languages_1 = require("../../../shared/enums/languages");
class User {
    constructor({ name, email, password, language = languages_1.Language.ENG, preferred_currency = currencies_1.Currency.US }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.language = language;
        this.created_at = new Date();
        this.preferred_currency = preferred_currency;
    }
}
exports.User = User;
