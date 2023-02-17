import { Injectable } from '@nestjs/common';
import { CreateCarTransmitionDto } from './dto/create-car-transmition.dto';
import { UpdateCarTransmitionDto } from './dto/update-car-transmition.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarTransmitionService {

  constructor(private readonly prisma: PrismaService) {}

  create(createCarTransmitionDto: CreateCarTransmitionDto) {
    return this.prisma.carTransmition.create({
      data: createCarTransmitionDto
    });
  }

  findAll() {
    return this.prisma.carTransmition.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }


  update(id: number, updateCarTransmitionDto: CreateCarTransmitionDto) {
    return this.prisma.carTransmition.update({
      where: {
        id: id,
      },
      data: updateCarTransmitionDto
    });
  }

  remove(id: number) {
    return this.prisma.carTransmition.delete({
      where: {
        id: id,
      }
    });
  }
}
