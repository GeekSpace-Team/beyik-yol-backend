import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(page: string, limit: string): Promise<{
        page_count: number;
        users: any[];
    }>;
    findFull(): Promise<(import(".prisma/client").Users & {
        cars: import(".prisma/client").Car[];
        carShare: import(".prisma/client").CarShare[];
        Events: import(".prisma/client").Events[];
        LoginHistory: import(".prisma/client").LoginHistory[];
        FCMToken: import(".prisma/client").FCMToken[];
    })[]>;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users, never>;
    toggleUserBlock(id: string): Promise<import(".prisma/client").Users>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
