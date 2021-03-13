import { CreateParticleDto } from './dto/create-particle.dto';
import { Model } from 'mongoose';
import { UpdateLevelDto } from '../level/dto/update-level.dto';
import { Particle, ParticleDocument } from './schemas/particle.schema';
export declare class ParticleService {
    private particleModel;
    constructor(particleModel: Model<ParticleDocument>);
    create(createParticleDto: CreateParticleDto): Promise<Particle>;
    findAll(): Promise<Particle[]>;
    findOne(id: string): Promise<Particle>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<Particle>;
    remove(id: string): Promise<Particle>;
}
//# sourceMappingURL=particle.service.d.ts.map