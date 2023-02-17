import { ArticlesService } from './articles.service';
export declare class ArticlesModule {
    private articlesService;
    constructor(articlesService: ArticlesService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
}
