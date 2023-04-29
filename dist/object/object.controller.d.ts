import { ObjectService } from './object.service';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
export declare class ObjectController {
    private readonly objectService;
    constructor(objectService: ObjectService);
    create(createObjectDto: CreateObjectDto): import(".prisma/client").Prisma.Prisma__ObjectsClient<import(".prisma/client").Objects, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Objects[]>;
    findOne(id: string): string;
    update(id: string, updateObjectDto: UpdateObjectDto): string;
    remove(id: string): string;
}
