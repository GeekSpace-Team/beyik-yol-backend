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
  async create(createCarImageDto: CreateCarImageDto[]) {
    let res={};
    await this.prisma.carImage.deleteMany({
      where: {
        AND: [
          {
            carId: createCarImageDto[0].carId
          },
          {
            OR: [
              {
                url: 'car_image_1.png'
              },
              {
                url: 'car_image_2.png'
              },
              {
                url: 'car_image_3.png'
              }
            ]
          }
        ]
      }
    })
    await this.prisma.carImage.createMany({
      data: createCarImageDto
    }).then(result=>{
      res = result;
    })
    return res;
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
    console.log(id);
    let oldData = await this.prisma.carImage.findUnique({
      where: {
        id: id
      }
    })
    if(!isNullValue(oldData)){
      if(oldData.url==="car_image_1.png" || oldData.url==="car_image_2.png" || oldData.url==='car_image_3.png'){}
      else {
        await fs.unlink(`./upload/car/image/${oldData.url}`,()=>{});
      }
    }
    return this.prisma.carImage.delete({
      where: {
        id: id,
      }
    });
  }
}
