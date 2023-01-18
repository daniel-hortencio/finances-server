"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const AppError_1 = require("./AppError");
var SERVER_ERRORS;
(function (SERVER_ERRORS) {
    SERVER_ERRORS["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(SERVER_ERRORS || (SERVER_ERRORS = {}));
function ErrorHandler(err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({
        status: 'error',
        message: `${SERVER_ERRORS.INTERNAL_SERVER_ERROR} - ${err === null || err === void 0 ? void 0 : err.message}`
    });
}
exports.ErrorHandler = ErrorHandler;
