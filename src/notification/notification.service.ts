import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { MessagingPayload } from "firebase-admin/lib/messaging";
import { NotificationDto } from "./dto/notification.dto";
import { MessagingOptions } from "firebase-admin/lib/messaging/messaging-api";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class NotificationsService {


    async sendToAll(notification: NotificationDto, tokens: string[]){
      // const testToken=tokens;
      const testToken=["c3JbsF21Siq3C9Fc2uIDD8:APA91bFjEG8hK2VeGyR-jqkAVIkXluOua02C86Nzhbd6AZp5RyhI6otwp3nud3_lwgKJwSujCGATRaHesPXIz4Gj6efLF8ywX3p-ws6w5IWvU_tvDH4N6lbZq-Woym3A6nVysSgH6c_b",...tokens];
      const payload: MessagingPayload = {
        notification: {
          title: `${notification.title_tm} / ${notification.title_ru}`,
          body: `${notification.body_tm} / ${notification.body_ru}`
        },
        data: {
          'url':notification.url
        }
      }
      await admin.messaging().sendToDevice(testToken.filter((tkn,i)=> typeof tkn !== 'undefined' && tkn!=null && tkn!="" && tkn.length>0), payload)
        .then((value)=>{
          console.log(value);
        },(reason)=>{
          console.log(reason);
        })
        .catch((reason)=>{
          console.log(reason);
        })
    }
}