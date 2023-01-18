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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const RefreshTokenRepository_1 = require("../repositories/RefreshTokenRepository");
class GenerateRefreshToken {
    constructor(refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }
    execute(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            const expiresIn = (0, dayjs_1.default)().add(1, 'day').unix();
            const refreshToken = yield this.refreshTokenRepository.create(id_user, expiresIn);
            return refreshToken;
        });
    }
}
exports.generateRefreshToken = new GenerateRefreshToken(new RefreshTokenRepository_1.RefreshTokenRepository());
