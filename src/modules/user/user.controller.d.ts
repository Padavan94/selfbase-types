/// <reference path="../../interfaces/global.d.ts" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterQuery, PaginateOptions } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    findAll(req: any, query: FilterQuery<UserDocument> & PaginateOptions): Promise<import("mongoose").PaginateResult<import("./schemas/user.schema").User>>;
    findOne(id: string): Promise<import("./schemas/user.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").User>;
    remove(id: string): Promise<import("./schemas/user.schema").User>;
}
//# sourceMappingURL=user.controller.d.ts.map