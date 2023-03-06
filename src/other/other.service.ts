import { Injectable } from '@nestjs/common';
import {
  Device,
  LoginLogType,
  EventType,
  PageType,
  ConstantPriceType,
  ObjectPermissions,
  AdsStatus,
  ItemStatus,
  ObjectType,
  ObjectStatus,
  UserStatus,
  ImageType,
  Permissions,
  ConstantTypes,
  CostType
} from "@prisma/client";
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';
import { PrismaModule } from "../prisma/prisma.module";
import { AuthService } from "../auth/auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { CarsService } from "../cars/cars.service";

@Injectable()
export class OtherService {
  constructor(private readonly prisma: PrismaService, private readonly auth: AuthService,private readonly carService: CarsService) {
  }
  findAll() {
    return {
      device: Object.keys(Device),
      loginType: Object.keys(LoginLogType),
      eventType: Object.keys(EventType),
      pageType: Object.keys(PageType),
      priceType: Object.keys(ConstantPriceType),
      objectPermissions: Object.keys(ObjectPermissions),
      adsStatus: Object.keys(AdsStatus),
      itemStatus: Object.keys(ItemStatus),
      userStatus: Object.keys(UserStatus),
      objectStatus: Object.keys(ObjectStatus),
      objectType: Object.keys(ObjectType),
      imageType: Object.keys(ImageType),
      permissions: Object.keys(Permissions),
      constantType: Object.keys(ConstantTypes),
      costType: Object.keys(CostType),
    };
  }

  async getHome(token: string) {
    let res = {};
    let userId = 0;
    try {
      await this.auth.getUser(token)
        .then((user) => {
          userId = user.sub;
        })
    } catch (err) {}
    await this.prisma.ads.findMany({
      where: {
        adsType: 'BANNER',
        status: 'ACTIVE'
      },
      orderBy: [
        {
          index: 'desc'
        },
        {
          createdAt: 'desc'
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result=>{
      res={
        banner: result
      }
    });
    await this.prisma.ads.findFirst({
      where: {
        adsType: 'POPUP',
        status: 'ACTIVE'
      },
      orderBy: [
        {
          index: 'desc'
        },
        {
          createdAt: 'desc'
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result=>{
      res={
        ...res,
        popup: result
      }
    });
    await this.prisma.ads.findMany({
      where: {
        OR: [
          {
            adsType: 'HOME_LARGE'
          },
          {
            adsType: 'HOME_MINI'
          }
        ],
        AND: [
          {
            status: 'ACTIVE'
          }
        ]
      },
      orderBy: [
        {
          index: 'desc'
        },
        {
          createdAt: 'desc'
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result=>{
      res = {
        ...res,
        ads: result
      }
    });
    if(userId!=0){
      await this.prisma.inbox.findMany({
        where: {
          userId: userId,
          isRead: false
        },
        orderBy: {
          createdAt: 'desc'
        }
      }).then(result=>{
        res = {
          ...res,
          inboxCount: result.length
        }
      })

      await this.carService.getUserCars(userId).then(result=>{
        res = {
          ...res,
          cars: result
        }
      })
      await this.prisma.users.findUnique({
        where: {id: userId}
      }).then(result =>{
        res = {
          ...res,
          user: result
        }
      })
    }

    await this.prisma.constantPrices.findMany({
      where: {
        OR: [
          {
            type: "FUEL_80"
          },
          {
            type: "FUEL_92"
          },
          {
            type: "FUEL_95"
          }
        ]
      }
    }).then(result =>{
      res = {
        ...res,
        fuel_price: result
      }
    })

    return res;
  }
}
