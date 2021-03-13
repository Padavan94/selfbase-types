import { CreateSnippetDto } from './dto/create-snippet.dto';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { Snippet, SnippetDocument } from './schemas/snippet.schema';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
export declare class SnippetService {
    private snippetModel;
    constructor(snippetModel: PaginateModel<SnippetDocument>);
    create(createSnippetDto: CreateSnippetDto): Promise<Snippet>;
    findAll({ limit, page, ...query }: FilterQuery<SnippetDocument> & PaginateOptions): Promise<PaginateResult<Snippet>>;
    findOne(id: string): Promise<Snippet>;
    update(id: string, updateSnippetDto: UpdateSnippetDto): Promise<Snippet>;
    remove(id: string): Promise<Snippet>;
}
//# sourceMappingURL=snippet.service.d.ts.map