"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ListAccountsByUserIdUseCase = void 0;
const tsyringe_1 = require("tsyringe");
let ListAccountsByUserIdUseCase = class ListAccountsByUserIdUseCase {
    constructor(accountsRepository, exchangesRepository) {
        this.accountsRepository = accountsRepository;
        this.exchangesRepository = exchangesRepository;
    }
    execute(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.accountsRepository.list(id_user);
            const exchanges = yield this.exchangesRepository.list(id_user);
            let movements_list = [];
            accounts.forEach((account) => {
                const year = account.date.getUTCFullYear();
                const month = account.date.getUTCMonth();
                const statement_index = movements_list.findIndex(statement => statement.year === year && statement.month === month);
                if (statement_index < 0) {
                    movements_list.push({
                        year,
                        month,
                        movements: [account]
                    });
                }
                else {
                    movements_list[statement_index].movements.push(account);
                }
            });
            exchanges.forEach((exchange) => {
                const year = exchange.date.getFullYear();
                const month = exchange.date.getUTCMonth();
                const statement_index = movements_list.findIndex(statement => statement.year === year && statement.month === month);
                if (statement_index < 0) {
                    movements_list.push({
                        year,
                        month,
                        movements: [exchange]
                    });
                }
                else {
                    const movement_index_to_insert = movements_list[statement_index].movements.findIndex(movement => movement.date < exchange.date);
                    if (movement_index_to_insert < 0) {
                        movements_list[statement_index].movements.push(exchange);
                    }
                    else {
                        movements_list[statement_index].movements.splice(movement_index_to_insert, 0, exchange);
                    }
                }
            });
            return movements_list;
        });
    }
};
ListAccountsByUserIdUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AccountsRepository")),
    __param(1, (0, tsyringe_1.inject)("ExchangesRepository")),
    __metadata("design:paramtypes", [Object, Object])
], ListAccountsByUserIdUseCase);
exports.ListAccountsByUserIdUseCase = ListAccountsByUserIdUseCase;
