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

@Injectable()
export class CostsService {
  constructor(private readonly prisma: PrismaService){}

  async createChange(createCostDto: CostChangeDto) {
    let ids = createCostDto.typeIds;
    delete createCostDto.typeIds;
    let res;
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
    let costToType = ids.map(id=>{
      let cc = new CostToTypeDto();
      cc.costId = res.id;
      cc.typeId = id;
      return cc;
    })
    await this.prisma.costToType.createMany({
      data: costToType
    });
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
