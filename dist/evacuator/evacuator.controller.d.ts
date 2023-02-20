import { EvacuatorService } from './evacuator.service';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';
export declare class EvacuatorController {
    private readonly evacuatorService;
    constructor(evacuatorService: EvacuatorService);
    create(createEvacuatorDto: CreateEvacuatorDto): string;
    findAll(): string;
    update(id: string, updateEvacuatorDto: UpdateEvacuatorDto): string;
    remove(id: string): string;
}
