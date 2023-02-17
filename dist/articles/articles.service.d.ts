import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): string;
    update(id: number, updateArticleDto: UpdateArticleDto): string;
    remove(id: number): string;
}
