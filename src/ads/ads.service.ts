import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { PrismaService } from "../prisma/prisma.service";
import { CreateAdImageDto } from "./dto/create-ad-image.dto";
import { CreateCarBrandDto } from "../car-brand/dto/create-car-brand.dto";
import { isNullValue } from "../helper/utils";
import fs from "fs";

@Injectable()
export class AdsService {
  constructor(private readonly prisma: PrismaService) {
  }
  async create(fileName: string, createAdDto: CreateAdDto) {
    let adsId = 0;
    createAdDto.index = parseInt(createAdDto.index.toString())
    await this.prisma.ads.create({
      data: createAdDto
    }).then(result => {
      adsId = result.id;
    })
    let adsImage = new CreateAdImageDto()
    adsImage.adsId=adsId;
    adsImage.url=fileName;
    await this.prisma.adsImage.create({
      data: adsImage
    })
    return this.prisma.ads.findUnique({
      where: {id: adsId},
      include: {
        adsImage: true
      }
    });
  }

  findAll() {
    return this.prisma.ads.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        adsImage: true
      }
    });
  }

  async update(fileName: string, id: number, updateAdsDto: CreateAdDto) {
    updateAdsDto.index = parseInt(updateAdsDto.index.toString())
    if(!isNullValue(fileName)){
      await this.prisma.adsImage.deleteMany({
        where: {adsId: id}
      }).then(result=>{
      })
      let adsImage = new CreateAdImageDto()
      adsImage.adsId=id;
      adsImage.url=fileName;
      await this.prisma.adsImage.create({
        data: adsImage
      })
    }

    return await this.prisma.ads.update({
      where: {
        id: id,
      },
      data: updateAdsDto
    });
  }

  remove(id: number) {
    return this.prisma.ads.delete({
      where: {id: id}
    });
  }
}
