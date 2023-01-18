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
exports.RefreshTokenUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
const errors_1 = require("../../errors");
const GenerateToken_1 = require("../../services/GenerateToken");
let RefreshTokenUseCase = class RefreshTokenUseCase {
    constructor(refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }
    execute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_refresh_token, id_user } = body;
            const refreshTokenExists = yield this.refreshTokenRepository.findById(id_refresh_token);
            if (!refreshTokenExists) {
                throw new AppError_1.AppError(errors_1.AUTH_ERRORS.REFRESH_TOKEN_IS_INVALID);
            }
            const now = new Date().getTime();
            const refreshTokenHasExpired = now > refreshTokenExists.expiresIn * 1000;
            if (refreshTokenHasExpired) {
                yield this.refreshTokenRepository.deleteByRefreshTokenId(id_refresh_token);
            }
            if (refreshTokenExists.id_user !== id_user) {
                throw new AppError_1.AppError(errors_1.AUTH_ERRORS.REFRESH_TOKEN_IS_INVALID);
            }
            if (refreshTokenHasExpired) {
                throw new AppError_1.AppError(errors_1.AUTH_ERRORS.REFRESH_TOKEN_IS_EXPIRED);
            }
            const token = GenerateToken_1.generateToken.execute(id_user);
            return { token, expiresIn: refreshTokenExists.expiresIn };
        });
    }
};
RefreshTokenUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("RefreshTokenRepository")),
    __metadata("design:paramtypes", [Object])
], RefreshTokenUseCase);
exports.RefreshTokenUseCase = RefreshTokenUseCase;
