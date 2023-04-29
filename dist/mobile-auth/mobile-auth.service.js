"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
const checked_number_dto_1 = require("./dto/checked-number.dto");
const users_service_1 = require("../users/users.service");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const jwt_1 = require("@nestjs/jwt");
const fs = require("fs");
const inbox_service_1 = require("../inbox/inbox.service");
const create_inbox_dto_1 = require("../inbox/dto/create-inbox.dto");
let MobileAuthService = class MobileAuthService {
    constructor(prisma, users, jwtService, inbox) {
        this.prisma = prisma;
        this.users = users;
        this.jwtService = jwtService;
        this.inbox = inbox;
    }
    async checkExisting(phone) {
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
    async checkPhoneNumber(phone) {
        let exist = await this.checkExisting(phone);
        return {
            exist: exist
        };
    }
    async sendNumber(phone) {
        let exist = await this.checkExisting(phone);
        let uuid = (0, uuid_1.v4)();
        let lastDay = Date.now() - (24 * 60 * 60 * 1000);
        let lDay = new Date(lastDay).toISOString();
        let check = new checked_number_dto_1.CheckedNumberDto();
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
            throw new common_1.HttpException(err.toString(), common_1.HttpStatus.FORBIDDEN);
        });
        return Object.assign(Object.assign({}, res), { sms_phone: "+99362348045" });
    }
    async acceptPhone(phone) {
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
    getToken(id, username) {
        const payload = { username: username, sub: id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
    async checkNumber(phone, uuid) {
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
                    res = Object.assign(Object.assign({}, result), this.getToken(result.id, result.phonenumber));
                });
            }
            else {
                let user = new create_user_dto_1.CreateUserDto();
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
                    res = Object.assign(Object.assign({}, result), this.getToken(result.id, result.phonenumber));
                });
            }
            let i = new create_inbox_dto_1.CreateInboxDto();
            i.userId = userId;
            i.messageTm = bodyTm;
            i.messageRu = bodyRu;
            i.titleTm = messageTm;
            i.titleRu = messageRu;
            i.url = '';
            await this.inbox.sendToUser(i);
            return res;
        }
        else {
            throw new common_1.HttpException("FORBIDDEN", common_1.HttpStatus.FORBIDDEN);
        }
    }
    async getProfile(id) {
        return this.users.findById(id);
    }
    async editProfile(id, body) {
        let oldUser;
        await this.prisma.users.findFirst({
            where: { id: id }
        }).then(user => {
            oldUser = user;
        });
        body.image = oldUser.image;
        body.dob = new Date(body.dob);
        body.username = oldUser.username;
        body.password = oldUser.password;
        body.phonenumber = oldUser.phonenumber;
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = id;
        i.messageTm = `Doglan wagtyňyz: ${oldUser.dob} -> ${body.dob}, Doly adyňyz: ${oldUser.fullname} -> ${body.fullname}`;
        i.messageRu = `Дата рождения: ${oldUser.dob} -> ${body.dob}, Ваше полное имя: ${oldUser.fullname} -> ${body.fullname}`;
        i.titleTm = '🔔Hasabyňyz üýtgedildi ✏️';
        i.titleRu = `🔔Ваш аккаунт был изменен ✏️`;
        i.url = '';
        await this.inbox.sendToUser(i);
        return this.prisma.users.update({
            where: { id: id },
            data: body
        });
    }
    async changeImage(image, id) {
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = id;
        i.messageTm = `Siziň hasabyňyzdaky şahsy suratyňyz üýtgedi!`;
        i.messageRu = `Изображение профиля вашей учетной записи изменилось!`;
        i.titleTm = '🔔Profil Suraty üýtgedi 🏞️';
        i.titleRu = `🔔Изображение профиля изменено 🏞️`;
        i.url = '';
        await this.inbox.sendToUser(i);
        await this.prisma.users.findFirst({
            where: { id: id }
        }).then(async (result) => {
            try {
                await fs.unlink(`./upload/users/images/${result.image}`, () => {
                });
            }
            catch (err) {
                console.log(err);
            }
        });
        return this.prisma.users.update({
            where: { id: id },
            data: {
                image: image
            }
        });
    }
    async saveFcmToken(id, body) {
        body.userId = id;
        console.log(body.token);
        let messageTm = `Hoş geldiňiz!`;
        let messageRu = `Добро пожаловать!`;
        let bodyTm = `🔔Salam ulanyjy ýenede programma dolananyňyz üçin köp sagboluň! ✨ Beýik ýol programmasy siziň işiňizi ýeňilleşdirer diýip umyt edýäris! 💡`;
        let bodyRu = `🔔Здравствуйте! Большое спасибо, что снова заглянули в приложение! ✨ Надеемся, приложение "Beyik yol" облегчит вам работу! 💡`;
        let res = {};
        await this.prisma.fCMToken.create({
            data: body
        }).then((result) => {
            res = result;
        });
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = id;
        i.messageTm = bodyTm;
        i.messageRu = bodyRu;
        i.titleTm = messageTm;
        i.titleRu = messageRu;
        i.url = '';
        await this.inbox.sendToUser(i);
        return res;
    }
};
MobileAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, users_service_1.UsersService, jwt_1.JwtService, inbox_service_1.InboxService])
], MobileAuthService);
exports.MobileAuthService = MobileAuthService;
//# sourceMappingURL=mobile-auth.service.js.map