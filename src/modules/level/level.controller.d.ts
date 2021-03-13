import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): Promise<import("./schemas/level.schema").Level>;
    findAll(): Promise<import("./schemas/level.schema").Level[]>;
    findOne(id: string): Promise<import("./schemas/level.schema").Level>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<import("./schemas/level.schema").Level>;
    remove(id: string): Promise<import("./schemas/level.schema").Level>;
}
//# sourceMappingURL=level.controller.d.ts.map