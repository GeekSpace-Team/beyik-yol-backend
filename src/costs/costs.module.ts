import { Module } from '@nestjs/common';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { NotificationModule } from "../notification/notification.module";
import { InboxModule } from "../inbox/inbox.module";

@Module({
  imports: [PrismaModule,NotificationModule,InboxModule],
  controllers: [CostsController],
  providers: [CostsService]
})
export class CostsModule {}
