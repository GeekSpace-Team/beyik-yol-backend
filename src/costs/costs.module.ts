import { Module } from '@nestjs/common';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { NotificationModule } from "../notification/notification.module";

@Module({
  imports: [PrismaModule,NotificationModule],
  controllers: [CostsController],
  providers: [CostsService]
})
export class CostsModule {}
