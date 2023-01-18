"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticated_routes = void 0;
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = require("../../http/middlewares/AuthMiddleware");
const accounts_routes_1 = require("./accounts.routes");
const category_routes_1 = require("./category.routes");
const exchanges_routes_1 = require("./exchanges.routes");
const user_routes_1 = require("./user.routes");
const authenticated_routes = (0, express_1.default)();
exports.authenticated_routes = authenticated_routes;
authenticated_routes.use("/user", AuthMiddleware_1.authMiddleware, user_routes_1.usersRoutes);
authenticated_routes.use("/category", AuthMiddleware_1.authMiddleware, category_routes_1.categoriesRoutes);
authenticated_routes.use("/account", AuthMiddleware_1.authMiddleware, accounts_routes_1.accountsRoutes);
authenticated_routes.use("/exchange", AuthMiddleware_1.authMiddleware, exchanges_routes_1.exchangesRoutes);
