import { Injectable } from '@nestjs/common';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';
import { PrismaService } from "../prisma/prisma.service";
import { Region } from '@prisma/client';

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
      ],
      include: {
        subRegion: true
      }
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

  async findAllMobile(region: number) {
    let subregions = [],regions: Region[]=[{
      id: 0,
      name_tm: "Ählisi",
      name_ru: "Все",
      description: "Ählisi",
      createdAt: new Date(),
      updatedAt: new Date()
    }];
    let res={};
    await this.prisma.region.findMany().then(result=>{
      regions=[...regions,...result];
    });
    await this.prisma.subRegion.findMany({
      where: {regionId: region}
    }).then(result=>{
      subregions = result.map(item=>item.id)
    })
    let condition = {}
    if(region!=0){
      condition={
        subRegionId: {
          in: subregions
        }
      }
    }
    await this.prisma.evacuator.findMany({
      where: condition,
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        subRegion: true
      }
    }).then(result=>{
      res={
        regions: regions,
        data: result
      }
    })
    return res;
  }
}
