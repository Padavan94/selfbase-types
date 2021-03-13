import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<import("./schemas/company.schema").Company>;
    findAll(): Promise<import("./schemas/company.schema").Company[]>;
    findOne(id: string): Promise<import("./schemas/company.schema").Company>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<import("./schemas/company.schema").Company>;
    remove(id: string): Promise<import("./schemas/company.schema").Company>;
}
//# sourceMappingURL=company.controller.d.ts.map