import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateMobileAuthDto } from './dto/create-mobile-auth.dto';
import { UpdateMobileAuthDto } from './dto/update-mobile-auth.dto';
import { PrismaService } from "../prisma/prisma.service";
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import { calcDate } from "../helper/utils";
import { CheckedNumberDto } from "./dto/checked-number.dto";

@Injectable()
export class MobileAuthService {
  constructor(private readonly prisma: PrismaService) {
  }
  async checkExisting(phone: string){
    let exist = false;
    await this.prisma.users.findMany({
      where: {
        phonenumber: phone
      }
    }).then(result=>{
      exist=result.length>0;
    })
    return exist;
  }
  async checkPhoneNumber(phone: string){
    let exist = await this.checkExisting(phone);
    return {
      exist: exist
    };
  }

  async sendNumber(phone: string){
    let exist = await this.checkExisting(phone);
    let uuid = uuidv4();
    let lastDay = Date.now() - (24 * 60 * 60 * 1000);
    let lDay = new Date(lastDay).toISOString();
    let count = 0;
    await this.prisma.checkedNumber.findMany({
      where: {
        AND: [
          {
            createdAt: {
              gte: lDay
            }
          },
          {
            phone: phone
          }
        ]
      }
    }).then((value) => {
         count = value.length;
    })
    if(count>3){
      throw new HttpException({
        tm: "Bu belgiden köp ýüzlenme boldy! Birazdan gaýta synanyşyp görüň!",
        ru: "Этот номер превышен! Пожалуйста, повторите попытку в ближайшее время!",
      }, HttpStatus.TOO_MANY_REQUESTS)
    } else {
      let check = new CheckedNumberDto();
      check.phone=phone;
      check.uuid=uuid;
      check.is_exists=exist;
      return await this.prisma.checkedNumber.create({
        data: check
      })
    }
  }
}
