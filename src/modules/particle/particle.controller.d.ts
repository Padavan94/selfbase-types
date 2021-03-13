import { ParticleService } from './particle.service';
import { CreateParticleDto } from './dto/create-particle.dto';
import { UpdateParticleDto } from './dto/update-particle.dto';
export declare class ParticleController {
    private readonly particleService;
    constructor(particleService: ParticleService);
    create(createParticleDto: CreateParticleDto): Promise<import("./schemas/particle.schema").Particle>;
    findAll(): Promise<import("./schemas/particle.schema").Particle[]>;
    findOne(id: string): Promise<import("./schemas/particle.schema").Particle>;
    update(id: string, updateParticleDto: UpdateParticleDto): Promise<import("./schemas/particle.schema").Particle>;
    remove(id: string): Promise<import("./schemas/particle.schema").Particle>;
}
//# sourceMappingURL=particle.controller.d.ts.map