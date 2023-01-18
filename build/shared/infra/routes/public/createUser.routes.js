"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRoutes = void 0;
const express_1 = require("express");
const CreateUserController_1 = __importDefault(require("../../../../modules/users/useCases/CreateUser/CreateUserController"));
const createUserRoutes = (0, express_1.Router)();
exports.createUserRoutes = createUserRoutes;
createUserRoutes.post('/', CreateUserController_1.default.handle);
