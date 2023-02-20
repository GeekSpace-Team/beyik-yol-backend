import { Injectable } from '@nestjs/common';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class EvacuatorService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createEvacuatorDto: CreateEvacuatorDto) {
    return this.prisma.evacuator.create({
      data: createEvacuatorDto
    });
  }

  findAll() {
    return this.prisma.evacuator.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }


  update(id: number, updateEvacuatorDto: CreateEvacuatorDto) {
    return this.prisma.evacuator.update({
      where: {id: id},
      data: updateEvacuatorDto
    });
  }

  remove(id: number) {
    return this.prisma.evacuator.delete({
      where: {id: id}
    });
  }
}
