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
const UpdateUserPreferencesUseCase_1 = require("./UpdateUserPreferencesUseCase");
class UpdateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { language, preferred_currency } = req.body;
            const { id_user } = req.auth;
            const updateUserPreferencesUseCase = tsyringe_1.container.resolve(UpdateUserPreferencesUseCase_1.UpdateUserPreferencesUseCase);
            yield updateUserPreferencesUseCase.execute(id_user, {
                language,
                preferred_currency
            });
            return res.status(200).send();
        });
    }
}
exports.default = new UpdateUserController();
