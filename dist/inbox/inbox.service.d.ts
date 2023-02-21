import { CreateInboxDto } from './dto/create-inbox.dto';
import { PrismaService } from "../prisma/prisma.service";
import { NotificationsService } from "../notification/notification.service";
export declare class InboxService {
    private readonly prisma;
    private readonly notification;
    constructor(prisma: PrismaService, notification: NotificationsService);
    sendToAll(createInboxDto: CreateInboxDto): Promise<import(".prisma/client").Inbox>;
    sendToUser(createInboxDto: CreateInboxDto): Promise<import(".prisma/client").Inbox>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Inbox[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__InboxClient<import(".prisma/client").Inbox, never>;
}
