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
exports.RefreshTokenRepository = void 0;
const prisma_1 = require("../../../prisma");
class RefreshTokenRepository {
    static getInstance() {
        if (!RefreshTokenRepository.INSTANCE) {
            RefreshTokenRepository.INSTANCE = new RefreshTokenRepository();
        }
        return RefreshTokenRepository.INSTANCE;
    }
    findById(id_refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const refresh_token = yield prisma_1.prismaClient.refreshToken.findFirst({
                where: {
                    id_refresh_token
                }
            });
            return refresh_token;
        });
    }
    create(id_user, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.refreshToken.deleteMany({
                where: {
                    id_user
                }
            });
            const refresh_token = yield prisma_1.prismaClient.refreshToken.create({
                data: {
                    id_user,
                    expiresIn
                }
            });
            return Object.assign(Object.assign({}, refresh_token), { id_user: undefined });
        });
    }
    deleteByRefreshTokenId(id_refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.refreshToken.deleteMany({
                where: {
                    id_refresh_token
                }
            });
        });
    }
    deleteByUserId(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.refreshToken.deleteMany({
                where: {
                    id_user
                }
            });
        });
    }
}
exports.RefreshTokenRepository = RefreshTokenRepository;
