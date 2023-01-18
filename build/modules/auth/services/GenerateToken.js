"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environments_1 = require("../../../shared/config/environments");
class GenerateToken {
    constructor() { }
    execute(id_user) {
        const minute = 60;
        const hour = 60 * minute;
        const token = jsonwebtoken_1.default.sign({}, environments_1.env.JWT_AUTH_SECRET, {
            subject: id_user,
            expiresIn: hour,
        });
        return token;
    }
}
exports.generateToken = new GenerateToken();
