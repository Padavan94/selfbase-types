import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Model } from 'mongoose';
import { Level, LevelDocument } from './schemas/level.schema';
export declare class LevelService {
    private levelModel;
    constructor(levelModel: Model<LevelDocument>);
    create(createLevelDto: CreateLevelDto): Promise<Level>;
    findAll(): Promise<Level[]>;
    findOne(id: string): Promise<Level>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<Level>;
    remove(id: string): Promise<Level>;
}
//# sourceMappingURL=level.service.d.ts.map