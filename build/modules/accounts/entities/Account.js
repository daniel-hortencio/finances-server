"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor({ description, value, currency, type, date, id_user, id_category = "" }) {
        this.description = description;
        this.value = value;
        this.type = type;
        this.currency = currency;
        this.id_user = id_user;
        this.id_category = id_category;
        this.date = new Date(date);
    }
}
exports.Account = Account;
