import { ChangeTypeService } from './change-type.service';
import { CreateChangeTypeDto } from './dto/create-change-type.dto';
export declare class ChangeTypeController {
    private readonly changeTypeService;
    constructor(changeTypeService: ChangeTypeService);
    create(createChangeTypeDto: CreateChangeTypeDto): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").ChangeType[]>;
    update(id: string, updateChangeTypeDto: CreateChangeTypeDto): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
}
