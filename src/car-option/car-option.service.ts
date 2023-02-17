import { Injectable } from '@nestjs/common';
import { CreateCarOptionDto } from './dto/create-car-option.dto';
import { UpdateCarOptionDto } from './dto/update-car-option.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarOptionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCarOptionDto: CreateCarOptionDto) {
    return this.prisma.carOption.create({
      data: createCarOptionDto
    });
  }

  findAll() {
    return this.prisma.carOption.findMany({
      orderBy: [{
        createdAt: 'desc'
      }]
    });
  }


  update(id: number, updateCarOptionDto: CreateCarOptionDto) {
    return this.prisma.carOption.update({
      where:{
        id: id
      },
      data: updateCarOptionDto
    });
  }

  remove(id: number) {
    return this.prisma.carOption.delete({
      where: {id: id},
    });
  }
}
