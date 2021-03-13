import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    readonly companies: string[];
    readonly providerId?: string;
}
export {};
//# sourceMappingURL=update-user.dto.d.ts.map