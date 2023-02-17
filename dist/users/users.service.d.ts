import { PrismaService } from "./../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users, never>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
