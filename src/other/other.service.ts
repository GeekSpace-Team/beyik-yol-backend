import axios from "axios";
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { CarsService } from "../cars/cars.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOtherDto } from "./dto/create-other.dto";
import { UpdateOtherDto } from "./dto/update-other.dto";

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

@Injectable()
export class OtherService {

  backupWeather: any = null;
  backupTTS: any = null;

  constructor(private readonly prisma: PrismaService, private readonly auth: AuthService, private readonly carService: CarsService) {
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
      costType: Object.keys(CostType)
    };
  }



  async getHome(token: string, isSend: Boolean = true) {
    let res = {};
    let userId = 0;
    try {
      await this.auth.getUser(token)
        .then((user) => {
          userId = user.sub;
        });
    } catch (err) {
    }
    await this.prisma.ads.findMany({
      where: {
        adsType: "BANNER",
        status: "ACTIVE"
      },
      orderBy: [
        {
          index: "desc"
        },
        {
          createdAt: "desc"
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result => {
      res = {
        banner: result
      };
    });
    await this.prisma.ads.findFirst({
      where: {
        adsType: "POPUP",
        status: "ACTIVE"
      },
      orderBy: [
        {
          index: "desc"
        },
        {
          createdAt: "desc"
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result => {
      res = {
        ...res,
        popup: result
      };
    });
    await this.prisma.ads.findMany({
      where: {
        OR: [
          {
            adsType: "HOME_LARGE"
          },
          {
            adsType: "HOME_MINI"
          }
        ],
        AND: [
          {
            status: "ACTIVE"
          }
        ]
      },
      orderBy: [
        {
          index: "desc"
        },
        {
          createdAt: "desc"
        }
      ],
      include: {
        adsImage: true
      }
    }).then(result => {
      res = {
        ...res,
        ads: result
      };
    });
    if (userId != 0) {
      await this.prisma.inbox.findMany({
        where: {
          userId: userId,
          isRead: false
        },
        orderBy: {
          createdAt: "desc"
        }
      }).then(result => {
        res = {
          ...res,
          inboxCount: result.length
        };
      });

      await this.carService.getUserCars(userId).then(result => {
        res = {
          ...res,
          cars: result
        };
      });
      await this.prisma.users.findUnique({
        where: { id: userId }
      }).then(result => {
        res = {
          ...res,
          user: result
        };
      });
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
    }).then(result => {
      res = {
        ...res,
        fuel_price: result
      };
    });

    // if (`${isSend}`==='true') {
    //   let isTTS = false;
    //   let temp = 0;
    //   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Ashgabat&appid=a2fe4fb63c29aa32f8e3c254e9cbde16&units=metric&lang=ru`)
    //     .then(response => {
    //       res = {
    //         ...res,
    //         weatherInfo: response.data
    //       };
    //       this.backupWeather = response.data;
    //       try {
    //         temp = Number(response.data.main.temp);
    //       } catch (err) {
    //       }
    //       isTTS = true;
    //     }).catch(err => {
    //       res = {
    //         ...res,
    //         weatherInfo: null
    //       };
    //     });

    //   if (isTTS) {
    //     let tts = `{
    //       "audioConfig": {
    //         "audioEncoding": "LINEAR16",
    //         "effectsProfileId": [
    //           "handset-class-device"
    //         ],
    //         "pitch": 0,
    //         "speakingRate": 1
    //       },
    //       "input": {
    //         "text": "Привет! Добро пожаловать в наше приложение! Сегодня температура ${parseInt(temp.toString())}°."
    //       },
    //       "voice": {
    //         "languageCode": "ru-RU",
    //         "name": "ru-RU-Wavenet-B"
    //       }
    //     }`;

    //     await axios.post(`https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyDJy-_ydiaAH6z2A0exJETzhKDlUhX7vyE`, JSON.parse(tts))
    //       .then(response => {
    //         res = {
    //           ...res,
    //           tts: response.data
    //         };
    //         this.backupTTS = response.data;
    //       })
    //       .catch(err => {
    //         res = {
    //           ...res,
    //           tts: null
    //         };
    //       });
    //   } else {
    //     res = {
    //       ...res,
    //       tts: null
    //     };
    //   }
    // } else {
      res = {
        ...res,
        tts: this.backupTTS,
        weatherInfo: this.backupWeather
      };
    // }

    return res;
  }
}
