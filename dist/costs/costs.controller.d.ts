import { CostsService } from './costs.service';
import { CostChangeDto } from "./dto/cost-change.dto";
export declare class CostsController {
    private readonly costsService;
    constructor(costsService: CostsService);
    createChangeCost(costChangeDto: CostChangeDto): Promise<import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: import(".prisma/client").CostToType[];
    }>;
    getCostsByCarId(id: string, type: string): Promise<(import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: (import(".prisma/client").CostToType & {
            changeType: import(".prisma/client").ChangeType;
        })[];
    })[]>;
    updateCost(id: string, costChangeDto: CostChangeDto): Promise<import(".prisma/client").CostChange & {
        car: import(".prisma/client").Car;
        CostToType: import(".prisma/client").CostToType[];
    }>;
    deleteCost(id: string): import(".prisma/client").Prisma.Prisma__CostChangeClient<import(".prisma/client").CostChange, never>;
}
