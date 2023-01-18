"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRoutes = void 0;
const express_1 = require("express");
const RefreshTokenController_1 = __importDefault(require("../../../../modules/auth/useCases/RefreshToken/RefreshTokenController"));
const SignInController_1 = __importDefault(require("../../../../modules/auth/useCases/SignIn/SignInController"));
const authenticationRoutes = (0, express_1.Router)();
exports.authenticationRoutes = authenticationRoutes;
authenticationRoutes.post('/sign-in', SignInController_1.default.handle);
authenticationRoutes.post('/refresh-token', RefreshTokenController_1.default.handle);
