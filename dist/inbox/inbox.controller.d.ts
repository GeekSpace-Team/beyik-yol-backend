import { InboxService } from './inbox.service';
import { CreateInboxDto } from './dto/create-inbox.dto';
export declare class InboxController {
    private readonly inboxService;
    constructor(inboxService: InboxService);
    create(createInboxDto: CreateInboxDto): Promise<import(".prisma/client").Inbox>;
    sendToUser(createInboxDto: CreateInboxDto): Promise<import(".prisma/client").Inbox>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Inbox[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__InboxClient<import(".prisma/client").Inbox, never>;
}
