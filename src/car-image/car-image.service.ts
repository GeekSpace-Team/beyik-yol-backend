import { Injectable } from '@nestjs/common';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { UpdateCarImageDto } from './dto/update-car-image.dto';
import { PrismaService } from "../prisma/prisma.service";
import * as fs from "fs";
import { isNullValue } from "../helper/utils";

@Injectable()
export class CarImageService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createCarImageDto: CreateCarImageDto[]) {
    return this.prisma.carImage.createMany({
      data: createCarImageDto
    });
  }

  async update(id: number, updateCarImageDto: CreateCarImageDto) {
    let oldData = await this.prisma.carImage.findUnique({
      where: {
        id: id
      }
    })
    if(!isNullValue(oldData)){
      await fs.unlink(`./upload/car/image/${oldData.url}`,()=>{});
    }
    return this.prisma.carImage.update({
      where: {
        id: id,
      },
      data: updateCarImageDto
    });
  }

  async remove(id: number) {
    let oldData = await this.prisma.carImage.findUnique({
      where: {
        id: id
      }
    })
    if(!isNullValue(oldData)){
      await fs.unlink(`./upload/car/image/${oldData.url}`,()=>{});
    }
    return this.prisma.carImage.delete({
      where: {
        id: id,
      }
    });
  }
}
