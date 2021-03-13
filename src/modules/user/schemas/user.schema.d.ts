/// <reference path="../../../interfaces/global.d.ts" />
import { Document } from 'mongoose';
import { AuthRoles } from '../../auth/constants/auth.constant';
export declare class User {
    providerId: string;
    firstName?: string;
    lastName?: string;
    email: string;
    nickname: string;
    avatar?: string;
    roles?: AuthRoles[];
    level: string;
    companies?: string[];
}
export declare type UserDocument = User & Document;
export declare const UserSchema: import("mongoose").Schema<Document<User>, import("mongoose").Model<Document<User>>, undefined>;
//# sourceMappingURL=user.schema.d.ts.map