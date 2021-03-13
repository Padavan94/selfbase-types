/// <reference path="../../../interfaces/global.d.ts" />
import { Document } from 'mongoose';
export declare class Level {
    name: string;
    description: string;
}
export declare type LevelDocument = Level & Document;
export declare const LevelSchema: import("mongoose").Schema<Document<Level>, import("mongoose").Model<Document<Level>>, undefined>;
//# sourceMappingURL=level.schema.d.ts.map