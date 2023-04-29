import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCarImageDto } from "../car-image/dto/create-car-image.dto";
import { randomIntFromInterval } from "../helper/utils";
import { CreateInboxDto } from "../inbox/dto/create-inbox.dto";
import { InboxService } from "../inbox/inbox.service";



@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService,private readonly inbox: InboxService) {}
  async create(createCarDto: CreateCarDto) {
    let res = {};
    let image = new CreateCarImageDto();

    await this.prisma.car.create({
      data: createCarDto
    }).then(result=>{
      res = result;
      image.carId = result.id;
      image.url = `car_image_${randomIntFromInterval(1,3)}.png`;
      image.status = 'ACTIVE';
      image.type = 'NONE';
    })


    await this.prisma.carImage.create({
      data: image
    }).then(result=>{})

    let i = new CreateInboxDto();
    i.userId = createCarDto.usersId;
    i.messageTm= `Täze ${createCarDto.name} atly ulag döredildi!`;
    i.messageRu=`Создан новый автомобиль под названием «${createCarDto.name}».!`;
    i.titleTm='🔔Täze ulag döredildi🚗';
    i.titleRu=`🔔Создан новый автомобиль🚗`;
    i.url='';
    await this.inbox.sendToUser(i);

    return res;
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

  async update(id: number, updateCarDto: CreateCarDto) {
    let i = new CreateInboxDto();
    i.userId = updateCarDto.usersId;
    i.messageTm= `${updateCarDto.name} atly ulag üýtgedildi!`;
    i.messageRu=`Автомобиль с именем "${updateCarDto.name}" был изменен!`;
    i.titleTm='🔔Ulag üýtgedildi🚗';
    i.titleRu=`🔔Автомобиль был модифицирован🚗`;
    i.url='';
    await this.inbox.sendToUser(i);
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

  async remove(id: number) {

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
