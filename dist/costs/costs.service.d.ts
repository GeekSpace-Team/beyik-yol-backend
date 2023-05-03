import { PrismaService } from "../prisma/prisma.service";
import { CostChangeDto } from "./dto/cost-change.dto";
import { NotificationsService } from "../notification/notification.service";
import { InboxService } from "../inbox/inbox.service";
export declare class CostsService {
    private readonly prisma;
    private readonly notification;
    private readonly inbox;
    constructor(prisma: PrismaService, notification: NotificationsService, inbox: InboxService);
    createChange(createCostDto: CostChangeDto, userId: number): Promise<import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: import(".prisma/client").CostToType[];
    }>;
    getByCarId(id: number, type: string): Promise<(import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: (import(".prisma/client").CostToType & {
            changeType: import(".prisma/client").ChangeType;
        })[];
    })[]>;
    updateCost(id: number, createCostDto: CostChangeDto): Promise<import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: import(".prisma/client").CostToType[];
    }>;
    deleteCost(id: number): import(".prisma/client").Prisma.Prisma__CostChangeClient<import(".prisma/client").CostChange, never>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__CostChangeClient<import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: (import(".prisma/client").CostToType & {
            changeType: import(".prisma/client").ChangeType;
        })[];
    }, never>;
}
