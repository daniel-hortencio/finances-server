"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsRoutes = void 0;
const express_1 = require("express");
const ListAccountsByUserIdController_1 = __importDefault(require("../../../../modules/accounts/useCases/ListAccountsByUserId/ListAccountsByUserIdController"));
const CreateAccountController_1 = __importDefault(require("../../../../modules/accounts/useCases/CreateAccount/CreateAccountController"));
const DeleteAccountController_1 = __importDefault(require("../../../../modules/accounts/useCases/DeleteAccount/DeleteAccountController"));
const UpdateAccountController_1 = __importDefault(require("../../../../modules/accounts/useCases/UpdateAccount/UpdateAccountController"));
const ListAccountNamesSuggestByUserIdController_1 = __importDefault(require("../../../../modules/accounts/useCases/ListAccountNamesSuggestByUserId/ListAccountNamesSuggestByUserIdController"));
const accountsRoutes = (0, express_1.Router)();
exports.accountsRoutes = accountsRoutes;
accountsRoutes.get('/', ListAccountsByUserIdController_1.default.handle);
accountsRoutes.get('/names-suggest', ListAccountNamesSuggestByUserIdController_1.default.handle);
accountsRoutes.post('/', CreateAccountController_1.default.handle);
accountsRoutes.put('/', UpdateAccountController_1.default.handle);
accountsRoutes.delete('/', DeleteAccountController_1.default.handle);
