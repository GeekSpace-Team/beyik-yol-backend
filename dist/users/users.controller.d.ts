import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(page: string, limit: string): Promise<{
        page_count: number;
        users: any[];
    }>;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users, never>;
    toggleUserBlock(id: string): Promise<import(".prisma/client").Users>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
