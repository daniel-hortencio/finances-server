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
exports.GetBalanceByUserUseCase = void 0;
const tsyringe_1 = require("tsyringe");
let GetBalanceByUserUseCase = class GetBalanceByUserUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    execute(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.accountRepository.list(id_user);
            const balance = {
                id_user,
                balances: []
            };
            accounts.forEach(account => {
                const account_value = account.type === "credit" ? account.value : (-1) * account.value;
                const balanceIndex = balance
                    .balances
                    .findIndex(balance => balance.currency === account.currency);
                if (balanceIndex < 0) {
                    balance.balances.push({
                        value: account_value,
                        currency: account.currency
                    });
                }
                else {
                    balance.balances[balanceIndex].value = balance.balances[balanceIndex].value + account_value;
                }
            });
            return balance;
        });
    }
};
GetBalanceByUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AccountsRepository")),
    __metadata("design:paramtypes", [Object])
], GetBalanceByUserUseCase);
exports.GetBalanceByUserUseCase = GetBalanceByUserUseCase;
