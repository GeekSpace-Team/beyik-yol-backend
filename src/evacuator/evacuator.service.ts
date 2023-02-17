import { Injectable } from '@nestjs/common';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';

@Injectable()
export class EvacuatorService {
  create(createEvacuatorDto: CreateEvacuatorDto) {
    return 'This action adds a new evacuator';
  }

  findAll() {
    return `This action returns all evacuator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evacuator`;
  }

  update(id: number, updateEvacuatorDto: UpdateEvacuatorDto) {
    return `This action updates a #${id} evacuator`;
  }

  remove(id: number) {
    return `This action removes a #${id} evacuator`;
  }
}
