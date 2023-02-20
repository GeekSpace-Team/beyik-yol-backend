import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationsService } from "./notification.service";

@Module({
  controllers: [NotificationController],
  providers: [NotificationsService]
})
export class NotificationModule {}
