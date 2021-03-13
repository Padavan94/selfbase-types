import { UserService } from '../user/user.service';
export declare enum Provider {
    GOOGLE = "google"
}
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateOAuthLogin(profile: any, provider: Provider): Promise<any>;
}
//# sourceMappingURL=auth.service.d.ts.map