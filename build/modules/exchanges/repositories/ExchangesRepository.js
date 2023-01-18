"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangesRepository = void 0;
const prisma_1 = require("../../../prisma");
const Exchange_1 = require("../entities/Exchange");
class ExchangesRepository {
    constructor() {
        this.allExchanges = [];
    }
    static getInstance() {
        if (!ExchangesRepository.INSTANCE) {
            ExchangesRepository.INSTANCE = new ExchangesRepository();
        }
        return ExchangesRepository.INSTANCE;
    }
    list(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.allExchanges = yield prisma_1.prismaClient.exchanges.findMany({
                where: {
                    id_user
                },
                orderBy: {
                    date: 'desc'
                }
            });
            return this.allExchanges;
        });
    }
    create({ input_value, input_currency, output_value, output_currency, date, id_user }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newExchange = new Exchange_1.Exchange({
                input_value,
                input_currency,
                output_value,
                output_currency,
                date,
                id_user
            });
            yield prisma_1.prismaClient.exchanges.create({
                data: newExchange
            });
        });
    }
    delete(id_exchange) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.exchanges.delete({
                where: {
                    id_exchange
                }
            });
        });
    }
}
exports.ExchangesRepository = ExchangesRepository;
