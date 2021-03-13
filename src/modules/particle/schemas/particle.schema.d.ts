/// <reference path="../../../interfaces/global.d.ts" />
import { Document } from 'mongoose';
export declare class Particle {
    name: string;
    description?: string;
    body: string;
    type: string;
}
export declare type ParticleDocument = Particle & Document;
export declare const ParticleSchema: import("mongoose").Schema<Document<Particle>, import("mongoose").Model<Document<Particle>>, undefined>;
//# sourceMappingURL=particle.schema.d.ts.map