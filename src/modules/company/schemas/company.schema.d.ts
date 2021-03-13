/// <reference path="../../../interfaces/global.d.ts" />
import { Document } from 'mongoose';
export declare class Company {
    name: string;
    description: string;
    logo: string;
}
export declare type CompanyDocument = Company & Document;
export declare const CompanySchema: import("mongoose").Schema<Document<Company>, import("mongoose").Model<Document<Company>>, undefined>;
//# sourceMappingURL=company.schema.d.ts.map