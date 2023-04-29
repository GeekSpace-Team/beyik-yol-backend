import { CreateCarImageDto } from './dto/create-car-image.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarImageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarImageDto: CreateCarImageDto[]): Promise<{}>;
    update(id: number, updateCarImageDto: CreateCarImageDto): Promise<import(".prisma/client").CarImage>;
    remove(id: number): Promise<import(".prisma/client").CarImage>;
}
