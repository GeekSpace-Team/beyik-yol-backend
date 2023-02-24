import { Module } from '@nestjs/common';
import { ChangeTypeService } from './change-type.service';
import { ChangeTypeController } from './change-type.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ChangeTypeController],
  providers: [ChangeTypeService]
})
export class ChangeTypeModule {}
