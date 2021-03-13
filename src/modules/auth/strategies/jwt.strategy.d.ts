import { User } from '../../user/schemas/user.schema';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ user }: {
        user: User | undefined;
    }): Promise<User>;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map