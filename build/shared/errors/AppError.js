"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super();
        Error.captureStackTrace(this, AppError);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
