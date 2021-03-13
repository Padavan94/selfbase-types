/// <reference path="../../../interfaces/global.d.ts" />
import { Document } from 'mongoose';
export declare class Category {
    name?: string;
    description?: string;
    logo?: string;
}
export declare type CategoryDocument = Category & Document;
export declare const CategorySchema: import("mongoose").Schema<Document<Category>, import("mongoose").Model<Document<Category>>, undefined>;
//# sourceMappingURL=category.schema.d.ts.map