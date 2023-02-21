import { NotificationDto } from "./dto/notification.dto";
export declare class NotificationsService {
    sendToAll(notification: NotificationDto, tokens: string[]): Promise<void>;
}
