import { CreateChangeTypeDto } from './dto/create-change-type.dto';
import { UpdateChangeTypeDto } from './dto/update-change-type.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class ChangeTypeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createChangeTypeDto: CreateChangeTypeDto): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").ChangeType[]>;
    update(id: number, updateChangeTypeDto: UpdateChangeTypeDto): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ChangeTypeClient<import(".prisma/client").ChangeType, never>;
}
