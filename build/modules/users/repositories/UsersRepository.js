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
exports.UsersRepository = void 0;
const prisma_1 = require("../../../prisma");
const User_1 = require("../entities/User");
class UsersRepository {
    constructor() {
        this.allUsers = [];
    }
    static getInstance() {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allUsers = yield prisma_1.prismaClient.users.findMany();
            return this.allUsers;
        });
    }
    create({ email, name, password, language, preferred_currency }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.User({
                email,
                name,
                password,
                language,
                preferred_currency
            });
            yield prisma_1.prismaClient.users.create({
                data: newUser
            });
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prismaClient.users.findFirst({
                where: {
                    email
                }
            });
            return user;
        });
    }
    findById(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prismaClient.users.findFirst({
                where: {
                    id_user
                }
            });
            return user;
        });
    }
    updatePreferences(id_user, { language, preferred_currency }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.users.update({
                where: {
                    id_user
                },
                data: {
                    language,
                    preferred_currency
                }
            });
        });
    }
    updateInfos(id_user, { name }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.users.update({
                where: {
                    id_user
                },
                data: {
                    name
                }
            });
        });
    }
    delete(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.users.delete({
                where: {
                    id_user
                }
            });
        });
    }
}
exports.UsersRepository = UsersRepository;
