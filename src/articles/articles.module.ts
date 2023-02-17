import { Get, Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {
  constructor(private articlesService: ArticlesService) {}
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }
}
