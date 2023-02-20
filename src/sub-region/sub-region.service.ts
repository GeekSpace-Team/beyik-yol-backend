import { Injectable } from '@nestjs/common';
import { CreateSubRegionDto } from './dto/create-sub-region.dto';
import { UpdateSubRegionDto } from './dto/update-sub-region.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubRegionService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createSubRegionDto: CreateSubRegionDto) {
    return this.prisma.subRegion.create({
      data: createSubRegionDto
    });
  }

  findAll() {
    return this.prisma.subRegion.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }

  update(id: number, updateSubRegionDto: CreateSubRegionDto) {
    return this.prisma.subRegion.update({
      where: {id: id},
      data: updateSubRegionDto
    });
  }

  remove(id: number) {
    return this.prisma.subRegion.delete({
      where: {id: id},
    });
  }
}
