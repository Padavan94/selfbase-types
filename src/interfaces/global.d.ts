declare module 'mongoose' {
    interface CollationOptions {
        locale?: string;
        caseLevel?: boolean;
        caseFirst?: string;
        strength?: number;
        numericOrdering?: boolean;
        alternate?: string;
        maxVariable?: string;
        backwards?: boolean;
    }
    interface CustomLabels {
        totalDocs?: string;
        limit?: string;
        page?: string;
        totalPages?: string;
        docs?: string;
        nextPage?: string;
        prevPage?: string;
    }
    interface ReadOptions {
        pref: string;
        tags?: any[];
    }
    interface PaginateOptions {
        select?: object | string;
        sort?: object | string;
        customLabels?: CustomLabels;
        collation?: CollationOptions;
        populate?: object[] | string[] | object | string | QueryPopulateOptions;
        lean?: boolean;
        leanWithId?: boolean;
        offset?: number;
        page?: number;
        limit?: number;
        read?: ReadOptions;
        pagination?: boolean;
        projection?: any;
        options?: MongooseQueryOptions;
    }
    interface QueryPopulateOptions {
        path: string;
        select?: any;
        match?: any;
        model?: string | Model<any>;
        options?: any;
        populate?: QueryPopulateOptions | QueryPopulateOptions[];
    }
    interface PaginateResult<T> {
        docs: T[];
        totalDocs: number;
        limit: number;
        page?: number;
        totalPages: number;
        nextPage?: number | null;
        prevPage?: number | null;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        meta?: any;
        [customLabel: string]: T[] | number | boolean | null | undefined;
    }
    interface PaginateModel<T extends Document> extends Model<T> {
        paginate(query?: FilterQuery<T>, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>;
    }
    function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): PaginateModel<any>;
}
export {};
//# sourceMappingURL=global.d.ts.map