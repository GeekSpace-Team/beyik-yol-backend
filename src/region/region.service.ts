import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createRegionDto: CreateRegionDto) {
    return this.prisma.region.create({
      data: createRegionDto
    });
  }

  findAll() {
    return this.prisma.region.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        subRegion: true
      }
    });
  }

  update(id: number, updateRegionDto: CreateRegionDto) {
    return this.prisma.region.update({
      where: {id: id},
      data: updateRegionDto
    });
  }

  remove(id: number) {
    return this.prisma.region.delete({
      where: {id: id}
    });
  }
}
