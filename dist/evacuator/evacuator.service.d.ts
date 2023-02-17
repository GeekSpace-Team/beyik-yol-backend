import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';
export declare class EvacuatorService {
    create(createEvacuatorDto: CreateEvacuatorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEvacuatorDto: UpdateEvacuatorDto): string;
    remove(id: number): string;
}
