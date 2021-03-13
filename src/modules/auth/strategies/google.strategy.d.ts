import { AuthService } from '../auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(request: Request, accessToken: string, refreshToken: string, profile: any): Promise<any>;
}
export {};
//# sourceMappingURL=google.strategy.d.ts.map