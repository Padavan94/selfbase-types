import { SnippetStatus } from '../interfaces';
export declare class CreateSnippetDto {
    readonly name: string;
    readonly description?: string;
    readonly status: SnippetStatus;
    readonly owner: string;
    readonly categories: string[];
    readonly content: string[];
}
//# sourceMappingURL=create-snippet.dto.d.ts.map