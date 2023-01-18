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
const FindUserByIdUseCase_1 = require("../../../users/useCases/FindById/FindUserByIdUseCase");
const UpdateAccountUseCase_1 = require("./UpdateAccountUseCase");
class UpdateAccountController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, value, type, currency, date, id_category } = req.body;
            const { id_user } = req.auth;
            const { id_account } = req.query;
            const findUserByIdUseCase = tsyringe_1.container.resolve(FindUserByIdUseCase_1.FindUserByIdUseCase);
            yield findUserByIdUseCase.execute(id_user);
            const updateAccountUseCase = tsyringe_1.container.resolve(UpdateAccountUseCase_1.UpdateAccountUseCase);
            yield updateAccountUseCase.execute({
                description,
                value,
                type,
                currency,
                date,
                id_category,
                id_account
            });
            return res.status(201).send();
        });
    }
}
exports.default = new UpdateAccountController();
