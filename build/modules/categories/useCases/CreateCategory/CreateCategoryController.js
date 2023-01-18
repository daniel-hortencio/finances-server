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
const CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, background_color, icon_color, icon_name } = req.body;
            const { id_user } = req.auth;
            const createUserUseCase = tsyringe_1.container.resolve(CreateCategoryUseCase_1.CreateCategoryUseCase);
            yield createUserUseCase.execute({
                name,
                id_user,
                background_color,
                icon_color,
                icon_name
            });
            return res.status(201).send();
        });
    }
}
exports.default = new CreateUserController();
