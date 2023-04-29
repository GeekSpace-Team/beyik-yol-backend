import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { CostFuelDto } from "./dto/cost-fuel.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CostChangeDto } from "./dto/cost-change.dto";
import { CostRepairDto } from "./dto/cost-repair.dto";
import { IsNotEmpty } from "class-validator";
import { isNullValue } from "../helper/utils";
import { CostToTypeDto } from "./dto/cost-to-type.dto";
import { NotificationsService } from "../notification/notification.service";
import { NotificationDto } from "../notification/dto/notification.dto";
import { CostType } from "@prisma/client";
import { CreateInboxDto } from "../inbox/dto/create-inbox.dto";
import { InboxService } from "../inbox/inbox.service";

@Injectable()
export class CostsService {
  constructor(private readonly prisma: PrismaService,private readonly notification: NotificationsService,private readonly inbox: InboxService){}

  async createChange(createCostDto: CostChangeDto,userId: number) {
    let ids = createCostDto.typeIds;
    delete createCostDto.typeIds;
    let res;
    const condition = {
      reminder: true,
      costType: CostType.CHANGE,
      carId: createCostDto.carId,
      nextMile: {
        lte: createCostDto.mile
      }
    }
    await this.prisma.costChange.findFirst({
      where: condition,
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    }).then(async result =>{
      if(result!=null){
        if(typeof result.id !=='undefined' && result.id!=null){
          let payload = new NotificationDto();
          payload.url = "";
          payload.body_tm = `Çalyşma wagty boldy!`;
          payload.body_ru = `Пришло время перемен!`;
          payload.title_ru = `Пришло время перемен!`;
          payload.title_tm = `Çalyşma wagty boldy!`;
          await this.prisma.fCMToken.findMany({
            where: {
              NOT: [
                {token: undefined}
              ],
              AND: [
                {
                  userId: userId
                }
              ]
            }
          }).then(async (result) => {
            await this.notification.sendToAll(payload,result.map(item => item.token));
          })
          await this.prisma.costChange.updateMany({
            where: {
              carId: createCostDto.carId
            },
            data: {
              reminder: false
            }
          })
        }
      }
    })

    await this.prisma.car.update({
      data: {
        lastMile: createCostDto.mile
      },
      where: {
        id: createCostDto.carId
      }
    })
    await this.prisma.costChange.create({
      data: createCostDto
    }).then(result=>{
      res=result;
    }).catch(err=>{
      throw new HttpException(err.toString(),HttpStatus.FORBIDDEN);
    });

    await this.prisma.costChange.updateMany({
      where: condition,
      data: {
        reminder: false
      }
    })

    let costToType = ids.map(id=>{
      let cc = new CostToTypeDto();
      cc.costId = res.id;
      cc.typeId = id;
      return cc;
    })
    await this.prisma.costToType.createMany({
      data: costToType
    });

    let i = new CreateInboxDto();
    i.userId = userId;
    i.messageTm= `Geçen ýoly ${createCostDto.mile} km!`;
    i.messageRu=`Проезд автомобиля ${createCostDto.mile} km`;
    i.titleTm='🔔Çykdaýjy hasaba alyndy💹🚗';
    i.titleRu=`🔔Стоимость создана🚗`;
    i.url='';
    await this.inbox.sendToUser(i);



    return this.prisma.costChange.findUnique({
      where: {id: res.id},
      include: {
        CostToType: true,
        car: true
      }
    });
  }

  async getByCarId(id: number, type: string){
    let typeCondition = {};
    if(!isNullValue(type)){
      typeCondition = {
        costType: type
      }
    }
    let condition = {
      carId: id,
      ...typeCondition
    };
    return this.prisma.costChange.findMany({
      where: condition,
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      include: {
        car: true,
        CostToType: {
          include: {
            changeType: true
          }
        }
      }
    })
  }

  async updateCost(id: number,createCostDto: CostChangeDto) {
    let ids = createCostDto.typeIds;
    delete createCostDto.typeIds;
    let res;
    await this.prisma.car.findUnique({
      where: {
        id: createCostDto.carId
      }
    }).then(async (result) => {
      if (result.lastMile < createCostDto.mile) {
        await this.prisma.car.update({
          data: {
            lastMile: createCostDto.mile
          },
          where: {
            id: createCostDto.carId
          }
        })
      }
    })
    await this.prisma.costChange.update({
      where: {id:id},
      data: createCostDto
    }).then(result=>{
      res=result;
    }).catch(err=>{
      throw new HttpException(err.toString(),HttpStatus.FORBIDDEN);
    });
    if(!isNullValue(ids) && ids.length>0){
      await this.prisma.costToType.deleteMany({
        where: {costId: id}
      });
      let costToType = ids.map(id=>{
        let cc = new CostToTypeDto();
        cc.costId = res.id;
        cc.typeId = id;
        return cc;
      })
      await this.prisma.costToType.createMany({
        data: costToType
      });
    }
    return this.prisma.costChange.findUnique({
      where: {id: res.id},
      include: {
        CostToType: true,
        car: true
      }
    });
  }

  deleteCost(id: number) {
    return this.prisma.costChange.delete({
      where: {id: id}
    })
  }

  getById(id: number) {
    return this.prisma.costChange.findUnique({
      where: {
        id: id
      },
      include: {
        car: true,
        CostToType: {
          include: {
            changeType: true
          }
        }
      }
    })
  }
}
