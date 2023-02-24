import { Injectable } from '@nestjs/common';
import { CreateInboxDto } from './dto/create-inbox.dto';
import { UpdateInboxDto } from './dto/update-inbox.dto';
import { PrismaService } from "../prisma/prisma.service";
import { NotificationsService } from "../notification/notification.service";
import { NotificationDto } from "../notification/dto/notification.dto";

@Injectable()
export class InboxService {
  constructor(private readonly prisma: PrismaService, private readonly notification: NotificationsService) {
  }
  async sendToAll(createInboxDto: CreateInboxDto) {
    let payload = new NotificationDto();
    payload.url = createInboxDto.url;
    payload.body_tm = createInboxDto.messageTm;
    payload.body_ru = createInboxDto.messageRu;
    payload.title_ru = createInboxDto.titleRu;
    payload.title_tm = createInboxDto.titleTm;
    await this.prisma.fCMToken.findMany({
      where: {
        NOT: [
          {token: undefined}
        ]
      }
    }).then(async (result) => {
      await this.notification.sendToAll(payload,result.map(item => item.token));
    })

    return this.prisma.inbox.create({
      data: createInboxDto
    });
  }

  async sendToUser(createInboxDto: CreateInboxDto) {
    let payload = new NotificationDto();
    payload.url = createInboxDto.url;
    payload.body_tm = createInboxDto.messageTm;
    payload.body_ru = createInboxDto.messageRu;
    payload.title_ru = createInboxDto.titleRu;
    payload.title_tm = createInboxDto.titleTm;
    await this.prisma.fCMToken.findMany({
      where: {
        NOT: [
          {token: undefined}
        ],
        AND: [
          {
            userId: createInboxDto.userId
          }
        ]
      }
    }).then(async (result) => {
      await this.notification.sendToAll(payload,result.map(item => item.token));
    })

    return this.prisma.inbox.create({
      data: createInboxDto
    });
  }

  findAll() {
    return this.prisma.inbox.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    })
  }


  remove(id: number) {
    return this.prisma.inbox.delete({
      where: {id: id}
    });
  }

  async getUserInbox(id: number) {
    let res;
    await this.prisma.inbox.findMany({
      where: {
        OR: [
          {
            userId: id
          },
          {
            userId: null
          }
        ]
      },
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    }).then(result=>{
      res = result;
    })
    await this.prisma.inbox.updateMany({
      where: {
        userId: id
      },
      data: {
        isRead: true
      }
    })
    return res;
  }
}
