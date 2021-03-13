import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./schemas/category.schema").Category>;
    findAll(): Promise<import("./schemas/category.schema").Category[]>;
    findOne(id: string): Promise<import("./schemas/category.schema").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./schemas/category.schema").Category>;
    remove(id: string): Promise<import("./schemas/category.schema").Category>;
}
//# sourceMappingURL=category.controller.d.ts.map