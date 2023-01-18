"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    JWT_AUTH_SECRET: process.env.JWT_AUTH_SECRET || "SUPER_SECRET",
    PORT: process.env.PORT
};
