import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCarDto: CreateCarDto) {
    return this.prisma.car.create({
      data: createCarDto
    });
  }

  findAll() {
    return this.prisma.car.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        images: true,
        carModel: true,
        carTransmition: true,
        carOption: true,
        carEngineType: true,
        carShare: true,
        users: true,
        costFuel: true,
        costChange: true,
        costRepair: true,
        CarView: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.car.findFirst({
      where: {
        id: id
      },
      include: {
        images: true,
        carModel: {
          include: {
            brand: {
              include: {
                models: true
              }
            }
          }
        },
        carTransmition: true,
        carOption: true,
        carEngineType: true,
        carShare: true,
        users: true,
        costFuel: true,
        costChange: true,
        costRepair: true,
        CarView: true
      }
    });
  }

  update(id: number, updateCarDto: CreateCarDto) {
    return this.prisma.car.update({
      data: updateCarDto,
      where:{
        id: id
      }
    });
  }
  async updateUserCars(id: number, updateCarDto: CreateCarDto[]) {
    let result = [];
    for (const car of updateCarDto) {
      const i = updateCarDto.indexOf(car);
      await this.prisma.car.upsert({
        where: {
          uuid: car.uuid,
        },
        update: car,
        create: car
      }).then(res=>{
        result.push(res)
      })
    }
    return result;
  }

  remove(id: number) {
    return this.prisma.car.delete({
      where:{
        id:id
      }
    });
  }

  async getUserCars(id: number) {
    return this.prisma.car.findMany({
      where: {
        usersId: id
      },
      include: {
        images: true,
        carModel: true,
        carTransmition: true,
        carOption: true,
        carEngineType: true,
        carShare: true,
        users: true,
        costFuel: true,
        costChange: true,
        costRepair: true,
        CarView: true
      }
    });
  }

  async getAddCarDetails() {
    let res={};
     await this.prisma.carBrand.findMany({include: {models:true}})
       .then(result=>{
         res = {
           ...res,
           brand: result
         }
       })
    await this.prisma.carOption.findMany()
      .then(result=>{
        res = {
          ...res,
          option: result
        }
      })
    await this.prisma.carTransmition.findMany()
      .then(result=>{
        res = {
          ...res,
          transmition: result
        }
      })
    await this.prisma.carEngine.findMany()
      .then(result=>{
        res = {
          ...res,
          engine: result
        }
      })

    return res;
  }
}
