"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListUsersUseCase_1 = require("./ListUsersUseCase");
class ListUsersController {
    handle(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUsersUseCase = tsyringe_1.container.resolve(ListUsersUseCase_1.ListUsersUseCase);
            const allUsers = yield listUsersUseCase.execute();
            return res.status(200).json(allUsers);
        });
    }
}
exports.default = new ListUsersController();
