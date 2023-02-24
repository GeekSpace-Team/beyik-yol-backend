import { Injectable } from '@nestjs/common';
import { CreateChangeTypeDto } from './dto/create-change-type.dto';
import { UpdateChangeTypeDto } from './dto/update-change-type.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ChangeTypeService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createChangeTypeDto: CreateChangeTypeDto) {
    return this.prisma.changeType.create({
      data: createChangeTypeDto
    });
  }

  findAll() {
    return this.prisma.changeType.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }


  update(id: number, updateChangeTypeDto: UpdateChangeTypeDto) {
    return this.prisma.changeType.update({
      where: {id: id},
      data: updateChangeTypeDto
    });
  }

  remove(id: number) {
    return this.prisma.changeType.delete({
      where: {id: id}
    });
  }
}
