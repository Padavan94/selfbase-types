import { AuthRoles } from '../../auth/constants/auth.constant';
import { User } from '../schemas/user.schema';
export declare class CreateUserDto {
    constructor(partial?: Partial<User>);
    readonly providerId: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly email: string;
    readonly nickname: string;
    readonly avatar?: string;
    readonly level?: string | null;
    readonly roles: AuthRoles[];
    readonly companies?: string[];
}
//# sourceMappingURL=create-user.dto.d.ts.map