import { Injectable } from '@nestjs/common';
import { CreateCarEngineDto } from './dto/create-car-engine.dto';
import { UpdateCarEngineDto } from './dto/update-car-engine.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarEngineService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createCarEngineDto: CreateCarEngineDto) {
    return this.prisma.carEngine.create({
      data: createCarEngineDto
    });
  }

  findAll() {
    return this.prisma.carEngine.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }


  update(id: number, updateCarEngineDto: CreateCarEngineDto) {
    return this.prisma.carEngine.update({
      where: {
        id: id
      },
      data: updateCarEngineDto
    });
  }

  remove(id: number) {
    return this.prisma.carEngine.delete({
      where: {
        id: id
      }
    });
  }
}
