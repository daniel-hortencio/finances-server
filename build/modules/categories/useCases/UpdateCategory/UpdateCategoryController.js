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
const UpdateCategoryUseCase_1 = require("./UpdateCategoryUseCase");
class UpdateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, icon_name, background_color, icon_color } = req.body;
            const { id_category } = req.query;
            const updateUserUseCase = tsyringe_1.container.resolve(UpdateCategoryUseCase_1.UpdateUserUseCase);
            yield updateUserUseCase.execute(id_category, {
                name,
                icon_name,
                background_color,
                icon_color
            });
            return res.status(200).send();
        });
    }
}
exports.default = new UpdateUserController();
