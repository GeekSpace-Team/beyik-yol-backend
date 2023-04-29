import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { InboxModule } from "../inbox/inbox.module";

@Module({
  imports: [PrismaModule,InboxModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule {}
