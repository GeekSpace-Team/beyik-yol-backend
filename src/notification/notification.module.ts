import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationsService } from "./notification.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [NotificationController],
  providers: [NotificationsService],
  exports: [NotificationsService]
})
export class NotificationModule {}
