/// <reference path="../../interfaces/global.d.ts" />
import { SnippetService } from './snippet.service';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { FilterQuery, PaginateOptions } from 'mongoose';
import { Snippet } from './schemas/snippet.schema';
export declare class SnippetController {
    private readonly snippetService;
    constructor(snippetService: SnippetService);
    create(createSnippetDto: CreateSnippetDto): Promise<Snippet>;
    findAll(query: FilterQuery<Snippet> & PaginateOptions): Promise<import("mongoose").PaginateResult<Snippet>>;
    findOne(id: string): Promise<Snippet>;
    update(id: string, updateSnippetDto: UpdateSnippetDto): Promise<Snippet>;
    remove(id: string): Promise<Snippet>;
}
//# sourceMappingURL=snippet.controller.d.ts.map