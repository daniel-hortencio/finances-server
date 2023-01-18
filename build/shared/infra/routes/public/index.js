"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.public_routes = void 0;
const express_1 = __importDefault(require("express"));
const createUser_routes_1 = require("./createUser.routes");
const authentication_routes_1 = require("./authentication.routes");
const public_routes = (0, express_1.default)();
exports.public_routes = public_routes;
public_routes.use("/create-user", createUser_routes_1.createUserRoutes);
public_routes.use("/auth", authentication_routes_1.authenticationRoutes);
