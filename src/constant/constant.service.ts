import { Injectable } from '@nestjs/common';
import { CreateConstantDto } from './dto/create-constant.dto';
import { UpdateConstantDto } from './dto/update-constant.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ConstantService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createConstantDto: CreateConstantDto) {
    return this.prisma.constants.create({
      data: createConstantDto
    });
  }

  findAll() {
    return this.prisma.constants.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }

  update(id: number, updateConstantDto: CreateConstantDto) {
    return this.prisma.constants.update({
      where: {id: id},
      data: updateConstantDto
    });
  }

  remove(id: number) {
    return this.prisma.constants.delete({
      where: {id: id}
    });
  }
}
