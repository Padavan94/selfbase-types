import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
export declare class UserService {
    private userModel;
    constructor(userModel: PaginateModel<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll({ limit, page, ...query }: FilterQuery<UserDocument> & PaginateOptions): Promise<PaginateResult<User>>;
    findOne(id: string): Promise<User>;
    findByProviderId(providerId: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
//# sourceMappingURL=user.service.d.ts.map