"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangesRoutes = void 0;
const express_1 = require("express");
const CreateExchangeController_1 = __importDefault(require("../../../../modules/exchanges/useCases/CreateExchange/CreateExchangeController"));
const DeleteExchangeController_1 = __importDefault(require("../../../../modules/exchanges/useCases/DeleteExchange/DeleteExchangeController"));
//import UpdateExchangeController from '../../../../modules/exchanges/useCases/UpdateExchange/UpdateExchangeController'
const exchangesRoutes = (0, express_1.Router)();
exports.exchangesRoutes = exchangesRoutes;
exchangesRoutes.post('/', CreateExchangeController_1.default.handle);
exchangesRoutes.delete('/', DeleteExchangeController_1.default.handle);
