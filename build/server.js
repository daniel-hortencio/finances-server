"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routes_1 = require("./shared/infra/routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
require("./shared/container");
const ErrorHandler_1 = require("./shared/errors/ErrorHandler");
const port = process.env.PORT;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)({
    origin: "*"
}));
server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
server.use(routes_1.router);
server.use(ErrorHandler_1.ErrorHandler);
server.listen(port, () => console.log(`Finantial server is running on port ${port}`));
