"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchange = void 0;
class Exchange {
    constructor({ input_value, input_currency, output_value, output_currency, date, id_user }) {
        this.input_value = input_value;
        this.input_currency = input_currency;
        this.output_value = output_value;
        this.output_currency = output_currency;
        this.id_user = id_user;
        this.date = new Date(date);
    }
}
exports.Exchange = Exchange;
