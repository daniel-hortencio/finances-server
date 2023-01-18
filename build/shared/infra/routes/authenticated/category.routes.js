"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const ListCategoriesByUserIdController_1 = __importDefault(require("../../../../modules/categories/useCases/ListCategoriesByUserId/ListCategoriesByUserIdController"));
const CreateCategoryController_1 = __importDefault(require("../../../../modules/categories/useCases/CreateCategory/CreateCategoryController"));
const UpdateCategoryController_1 = __importDefault(require("../../../../modules/categories/useCases/UpdateCategory/UpdateCategoryController"));
const DeleteCategoryController_1 = __importDefault(require("../../../../modules/categories/useCases/DeleteCategory/DeleteCategoryController"));
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.get('/', ListCategoriesByUserIdController_1.default.handle);
categoriesRoutes.post('/', CreateCategoryController_1.default.handle);
categoriesRoutes.put('/', UpdateCategoryController_1.default.handle);
categoriesRoutes.delete('/', DeleteCategoryController_1.default.handle);
