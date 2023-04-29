import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class ObjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createObjectDto: CreateObjectDto): import(".prisma/client").Prisma.Prisma__ObjectsClient<import(".prisma/client").Objects, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Objects[]>;
    findOne(id: number): string;
    update(id: number, updateObjectDto: UpdateObjectDto): string;
    remove(id: number): string;
}
