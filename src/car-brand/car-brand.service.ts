import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCarBrandDto } from "./dto/create-car-brand.dto";
import { UpdateCarBrandDto } from "./dto/update-car-brand.dto";
import { PrismaService } from "../prisma/prisma.service";
import { isNullValue } from "../helper/utils";
import * as fs from "fs";

@Injectable()
export class CarBrandService {
  constructor(private prisma: PrismaService) {
  }
  create(fileName: string, createCarBrandDto: CreateCarBrandDto) {
    createCarBrandDto.image = fileName;
    return this.prisma.carBrand.create({
      data: createCarBrandDto
    });
  }

  findAll() {
    return this.prisma.carBrand.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        models: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  async update(fileName: string, id: number, updateCarBrandDto: CreateCarBrandDto) {
    let oldData = await this.prisma.carBrand.findUnique({
      where: {
        id: id,
      }
    });
    if(isNullValue(fileName)){
      fileName = oldData.image;
    } else {
      await fs.unlink(`./upload/car/car-brand/${oldData.image}`,()=>{});
    }
    updateCarBrandDto.image = fileName;
    return await this.prisma.carBrand.update({
      where: {
        id: id,
      },
      data: updateCarBrandDto
    });
  }

  remove(id: number) {
    try {
      return this.prisma.carBrand.delete({
        where: {
          id: id
        }
      });
    } catch (err) {
      throw new BadRequestException();
    }

  }
}
