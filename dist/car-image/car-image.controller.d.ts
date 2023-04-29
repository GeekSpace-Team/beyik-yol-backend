/// <reference types="multer" />
import { CarImageService } from './car-image.service';
import { CreateCarImageDto } from './dto/create-car-image.dto';
export declare class CarImageController {
    private readonly carImageService;
    constructor(carImageService: CarImageService);
    create(files: Array<Express.Multer.File>, id: string): Promise<{}>;
    update(file: Express.Multer.File, id: string, updateCarImageDto: CreateCarImageDto): Promise<import(".prisma/client").CarImage>;
    remove(id: string): Promise<import(".prisma/client").CarImage>;
}
