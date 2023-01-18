"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const authenticated_1 = require("./authenticated");
const public_1 = require("./public");
const router = (0, express_1.default)();
exports.router = router;
router.use(public_1.public_routes);
router.use(authenticated_1.authenticated_routes);
