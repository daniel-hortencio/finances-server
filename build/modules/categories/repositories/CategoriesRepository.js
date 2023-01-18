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
exports.CategoriesRepository = void 0;
const prisma_1 = require("../../../prisma");
const Category_1 = require("../entities/Category");
class CategoriesRepository {
    constructor() {
        this.allCategories = [];
    }
    static getInstance() {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }
    list(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.allCategories = yield prisma_1.prismaClient.categories.findMany({
                where: {
                    id_user
                }
            });
            return this.allCategories;
        });
    }
    findById(id_category) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma_1.prismaClient.categories.findFirst({
                where: {
                    id_category
                }
            });
            return category;
        });
    }
    findByName(id_user, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma_1.prismaClient.categories.findFirst({
                where: {
                    AND: {
                        id_user,
                        name
                    }
                }
            });
            return category;
        });
    }
    create({ id_user, name, icon_name, background_color, icon_color }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = new Category_1.Category({
                name,
                icon_name,
                background_color,
                icon_color,
                id_user
            });
            yield prisma_1.prismaClient.categories.create({
                data: newCategory
            });
        });
    }
    update(id_category, { name, icon_name, background_color, icon_color }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.categories.update({
                where: {
                    id_category
                },
                data: {
                    name,
                    icon_name,
                    background_color,
                    icon_color
                }
            });
        });
    }
    delete(id_category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prismaClient.categories.delete({
                where: {
                    id_category
                }
            });
        });
    }
}
exports.CategoriesRepository = CategoriesRepository;
