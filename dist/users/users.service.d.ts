import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): string;
    findAll(page: number, limit: number): Promise<{
        page_count: number;
        users: any[];
    }>;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users, never>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users, never>;
    toggleBlock(id: number): Promise<import(".prisma/client").Users>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
