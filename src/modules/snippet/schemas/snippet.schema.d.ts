/// <reference path="../../../interfaces/global.d.ts" />
import { SnippetStatus } from '../interfaces';
import { Document } from 'mongoose';
export declare class Snippet {
    name: string;
    description?: string;
    status: SnippetStatus;
    owner: string;
    categories: string[];
    content: string[];
}
export declare type SnippetDocument = Snippet & Document;
export declare const SnippetSchema: import("mongoose").Schema<Document<Snippet>, import("mongoose").Model<Document<Snippet>>, undefined>;
//# sourceMappingURL=snippet.schema.d.ts.map