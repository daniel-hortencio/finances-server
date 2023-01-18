"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../../../../../modules/auth/errors");
const AppError_1 = require("../../../../errors/AppError");
const environments_1 = require("../../../../config/environments");
function authMiddleware(req, res, next) {
    const { auth = "" } = req.headers;
    if (!auth) {
        throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_NOT_INFORMED, 401);
    }
    const [, token] = auth.split('Bearer ');
    if (!auth) {
        throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_FORMAT_IS_INCORRECT, 401);
    }
    let is_valid_token;
    (0, jsonwebtoken_1.verify)(token, environments_1.env.JWT_AUTH_SECRET, (err, valid) => {
        if (err === null || err === void 0 ? void 0 : err.message) {
            switch (err === null || err === void 0 ? void 0 : err.message) {
                case "jwt expired":
                    throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_IS_EXPIRED, 401);
                case "invalid signature":
                    throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_IS_INVALID, 401);
                case "jwt malformed":
                    throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_FORMAT_IS_INCORRECT, 401);
                default:
                    throw new AppError_1.AppError(errors_1.AUTH_ERRORS.TOKEN_IS_INVALID, 401);
            }
        }
        is_valid_token = valid;
    });
    req.auth = {
        id_user: is_valid_token === null || is_valid_token === void 0 ? void 0 : is_valid_token.sub
    };
    next();
}
exports.authMiddleware = authMiddleware;
