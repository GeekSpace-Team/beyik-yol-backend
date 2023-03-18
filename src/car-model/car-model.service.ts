import { Injectable } from '@nestjs/common';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarModelService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createCarModelDto: CreateCarModelDto) {
    return this.prisma.carModel.create({
      data: createCarModelDto
    });
  }

  findAll() {
    return this.prisma.carModel.findMany({
      orderBy: [
        {
          name: 'asc'
        }
      ]
    });
  }

  findOne(id: number) {
    return this.prisma.carModel.findMany({
      where: {
        brandId: id,
      },
      orderBy: [
        {
          createdAt: 'desc',
        }
      ]
    });
  }

  update(id: number, updateCarModelDto: CreateCarModelDto) {
    return this.prisma.carModel.update({
      where: {
        id: id,
      },
      data: updateCarModelDto
    });
  }

  remove(id: number) {
    return this.prisma.carModel.delete({
      where: {
        id: id,
      }
    });
  }
}
