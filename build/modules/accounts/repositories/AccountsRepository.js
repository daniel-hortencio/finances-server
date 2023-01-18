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
exports.AccountsRepository = void 0;
const prisma_1 = require("../../../prisma");
const Account_1 = require("../entities/Account");
class AccountsRepository {
    constructor() {
        this.allAccounts = [];
    }
    static getInstance() {
        if (!AccountsRepository.INSTANCE) {
            AccountsRepository.INSTANCE = new AccountsRepository();
        }
        return AccountsRepository.INSTANCE;
    }
    list(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.allAccounts = yield prisma_1.prismaClient.accounts.findMany({
                where: {
                    id_user
                },
                orderBy: {
                    date: 'desc'
                }
            });
            return this.allAccounts;
        });
    }
    create({ description, currency, type, value, date, id_user, id_category }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAccount = new Account_1.Account({
                description,
                currency,
                type,
                value,
                date,
                id_user,
                id_category
            });
            yield prisma_1.prismaClient.accounts.create({
                data: newAccount
            });
        });
    }
    update(id_account, { description, currency, type, value, date, id_category = "" }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.accounts.update({
                where: {
                    id_account
                },
                data: {
                    description,
                    currency,
                    type,
                    value,
                    date: new Date(date),
                    id_category
                }
            });
        });
    }
    delete(id_account) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.accounts.delete({
                where: {
                    id_account
                }
            });
        });
    }
    deleteCategory(id_category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.accounts.updateMany({
                where: {
                    id_category
                },
                data: {
                    id_category: ""
                }
            });
        });
    }
}
exports.AccountsRepository = AccountsRepository;
