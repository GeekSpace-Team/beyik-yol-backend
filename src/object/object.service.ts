import { Injectable } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ObjectService {

  constructor(private readonly prisma: PrismaService) {
  }
  create(createObjectDto: CreateObjectDto) {
    return this.prisma.objects.create({
      data: createObjectDto
    });
  }

  findAll() {
    return this.prisma.objects.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} object`;
  }

  update(id: number, updateObjectDto: UpdateObjectDto) {
    return `This action updates a #${id} object`;
  }

  remove(id: number) {
    return `This action removes a #${id} object`;
  }
}
