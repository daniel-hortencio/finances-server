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
const CreateExchangeUseCase_1 = require("./CreateExchangeUseCase");
class CreateExchangeController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { input_value, input_currency, output_value, output_currency, date } = req.body;
            const { id_user } = req.auth;
            const findUserByIdUseCase = tsyringe_1.container.resolve(FindUserByIdUseCase_1.FindUserByIdUseCase);
            yield findUserByIdUseCase.execute(id_user);
            const createExchangeUseCase = tsyringe_1.container.resolve(CreateExchangeUseCase_1.CreateExchangeUseCase);
            yield createExchangeUseCase.execute({
                input_value,
                input_currency,
                output_value,
                output_currency,
                date,
                id_user
            });
            return res.status(201).send();
        });
    }
}
exports.default = new CreateExchangeController();
