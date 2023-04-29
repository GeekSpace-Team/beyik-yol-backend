import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateMobileAuthDto } from "./dto/create-mobile-auth.dto";
import { UpdateMobileAuthDto } from "./dto/update-mobile-auth.dto";
import { PrismaService } from "../prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { calcDate } from "../helper/utils";
import { CheckedNumberDto } from "./dto/checked-number.dto";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import * as fs from "fs";
import { SaveFcmTokenDto } from "./dto/save-fcm-token.dto";
import { InboxService } from "../inbox/inbox.service";
import { CreateInboxDto } from "../inbox/dto/create-inbox.dto";

@Injectable()
export class MobileAuthService {

  constructor(private readonly prisma: PrismaService, private readonly users: UsersService, private jwtService: JwtService,private readonly inbox: InboxService) {
  }

  async checkExisting(phone: string) {
    let exist = false;
    await this.prisma.users.findMany({
      where: {
        phonenumber: phone
      }
    }).then(result => {
      exist = result.length > 0;
    });
    return exist;
  }

  async checkPhoneNumber(phone: string) {
    let exist = await this.checkExisting(phone);
    return {
      exist: exist
    };
  }

  async sendNumber(phone: string) {
    let exist = await this.checkExisting(phone);
    let uuid = uuidv4();
    let lastDay = Date.now() - (24 * 60 * 60 * 1000);
    let lDay = new Date(lastDay).toISOString();
    // let count = 0;
    // await this.prisma.checkedNumber.findMany({
    //   where: {
    //     AND: [
    //       {
    //         createdAt: {
    //           gte: lDay
    //         }
    //       },
    //       {
    //         phone: phone
    //       },
    //       {
    //         accepted: false
    //       }
    //     ]
    //   }
    // }).then((value) => {
    //      count = value.length;
    // })
    // if(count>7){
    //   throw new HttpException({
    //     tm: "Bu belgiden köp ýüzlenme boldy! Birazdan gaýta synanyşyp görüň!",
    //     ru: "Этот номер превышен! Пожалуйста, повторите попытку в ближайшее время!",
    //   }, HttpStatus.TOO_MANY_REQUESTS)
    // } else {
    let check = new CheckedNumberDto();
    check.phone = phone;
    check.uuid = uuid;
    check.is_exists = exist;
    let res = {};
    await this.prisma.checkedNumber.deleteMany({
      where: { phone: phone }
    });
    await this.prisma.checkedNumber.create({
      data: check
    })
      .then(result => {
        res = result;

      })
      .catch(err => {
        throw new HttpException(err.toString(), HttpStatus.FORBIDDEN);
      });
    return {
      ...res,
      sms_phone: "+99362348045"
    };
    // }
  }

  async acceptPhone(phone: string) {
    await this.prisma.checkedNumber.updateMany({
      where: {
        phone: phone
      },
      data: {
        accepted: true
      }
    });
    return {
      number: phone
    };
  }

  getToken(id: number, username: string) {
    const payload = { username: username, sub: id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async checkNumber(phone: string, uuid: string) {
    let count = 0;
    let condition = {
      AND: [
        {
          phone: phone
        },
        {
          uuid: uuid
        },
        {
          accepted: true
        },
        {
          used: false
        }
      ]
    };
    await this.prisma.checkedNumber.findMany({
      where: condition
    }).then(result => {
      count = result.length;
    });
    if (count > 0) {
      await this.prisma.checkedNumber.updateMany({
        where: condition,
        data: {
          used: true
        }
      });
      let exist = await this.checkExisting(phone);
      let res;
      let messageTm = `Hoş geldiňiz!`;
      let messageRu = `Добро пожаловать!`;
      let bodyTm = ``;
      let bodyRu = ``;
      let userId = 0;
      if (exist) {
        await this.prisma.users.findFirst({
          where: { phonenumber: phone }
        }).then(result => {
          bodyTm = `🔔Salam ${result.fullname}, ýenede programma dolananyňyz üçin köp sagboluň! ✨ Beýik ýol programmasy siziň işiňizi ýeňilleşdirer diýip umyt edýäris! 💡`;
          bodyRu = `🔔Здравствуйте, ${result.fullname}! Большое спасибо, что снова заглянули в приложение! ✨ Надеемся, приложение "Beyik yol" облегчит вам работу! 💡`;
          userId = result.id;
          res = {
            ...result,
            ...this.getToken(result.id, result.phonenumber)
          };
        });

      } else {
        let user = new CreateUserDto();
        user.phonenumber = phone;
        user.username = phone + "@username";
        user.password = phone + "@password";
        user.fullname = "";

        bodyTm = `🔔Salam ulanyjy, biziň programmamyzy ulanmak üçin saýlap alnyňyza köp sagboluň! Programma size tötänleýin ${user.username} ulanyjy adyny berdi. 
        Bu maglumatlary üýtgetmek üçin hasabyňyzy üýtgetmek sahypsyna geçip üýtgedip bilersiňiz! ✨ Beýik ýol programmasy siziň işiňizi ýeňilleşdirer diýip umyt edýäris! 💡`;
        bodyRu = `🔔Здравствуйте, пользователь, спасибо, что выбрали наше приложение! Приложение дало вам случайное имя пользователя ${user.username}.
         Чтобы изменить эту информацию, вы можете изменить ее, перейдя на страницу изменения своей учетной записи! ✨ Надеемся, приложение "Beyik yol" облегчит вам работу! 💡`;

        await this.prisma.users.create({
          data: user
        }).then(result => {
          userId = result.id;
            res = {
            ...result,
            ...this.getToken(result.id, result.phonenumber)
          };
        });
      }
      let i = new CreateInboxDto();
      i.userId = userId;
      i.messageTm= bodyTm;
      i.messageRu=bodyRu;
      i.titleTm=messageTm;
      i.titleRu=messageRu;
      i.url='';
      await this.inbox.sendToUser(i);
      return res;
    } else {
      throw new HttpException("FORBIDDEN", HttpStatus.FORBIDDEN);
    }
  }


  async getProfile(id: number) {
    return this.users.findById(id);
  }

  async editProfile(id: number, body: CreateUserDto) {
    let oldUser;

    await this.prisma.users.findFirst({
      where: {id: id}
    }).then(user => {
      oldUser = user;
    })
    body.image = oldUser.image;
    body.dob = new Date(body.dob);
    body.username=oldUser.username;
    body.password = oldUser.password;
    body.phonenumber = oldUser.phonenumber;

    let i = new CreateInboxDto();
    i.userId = id;
    i.messageTm= `Doglan wagtyňyz: ${oldUser.dob} -> ${body.dob}, Doly adyňyz: ${oldUser.fullname} -> ${body.fullname}`;
    i.messageRu=`Дата рождения: ${oldUser.dob} -> ${body.dob}, Ваше полное имя: ${oldUser.fullname} -> ${body.fullname}`;
    i.titleTm='🔔Hasabyňyz üýtgedildi ✏️';
    i.titleRu=`🔔Ваш аккаунт был изменен ✏️`;
    i.url='';
    await this.inbox.sendToUser(i);

    return this.prisma.users.update({
      where: { id: id },
      data: body
    });
  }

  async changeImage(image: string, id: number) {
    let i = new CreateInboxDto();
    i.userId = id;
    i.messageTm= `Siziň hasabyňyzdaky şahsy suratyňyz üýtgedi!`;
    i.messageRu=`Изображение профиля вашей учетной записи изменилось!`;
    i.titleTm='🔔Profil Suraty üýtgedi 🏞️';
    i.titleRu=`🔔Изображение профиля изменено 🏞️`;
    i.url='';
    await this.inbox.sendToUser(i);
    await this.prisma.users.findFirst({
      where: { id: id }
    }).then(async result => {
      try {
        await fs.unlink(`./upload/users/images/${result.image}`, () => {
        });
      } catch (err) {
        console.log(err);
      }
    })
    return this.prisma.users.update({
      where: { id: id },
      data: {
        image: image
      }
    })
  }

  async saveFcmToken(id: number, body: SaveFcmTokenDto) {
    body.userId=id;
    console.log(body.token);
    let messageTm = `Hoş geldiňiz!`;
    let messageRu = `Добро пожаловать!`;
    let bodyTm = `🔔Salam ulanyjy ýenede programma dolananyňyz üçin köp sagboluň! ✨ Beýik ýol programmasy siziň işiňizi ýeňilleşdirer diýip umyt edýäris! 💡`;
    let bodyRu = `🔔Здравствуйте! Большое спасибо, что снова заглянули в приложение! ✨ Надеемся, приложение "Beyik yol" облегчит вам работу! 💡`;
    let res = {};
    await this.prisma.fCMToken.create({
      data: body
    }).then((result)=>{
      res = result;
    });
    let i = new CreateInboxDto();
    i.userId = id;
    i.messageTm= bodyTm;
    i.messageRu=bodyRu;
    i.titleTm=messageTm;
    i.titleRu=messageRu;
    i.url='';
    await this.inbox.sendToUser(i);
    return res;
  }
}
