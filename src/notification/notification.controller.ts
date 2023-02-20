import { Controller } from '@nestjs/common';
import { NotificationsService } from "./notification.service";

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationsService) {}
}
