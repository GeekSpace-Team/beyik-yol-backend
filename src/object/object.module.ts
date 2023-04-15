import { Module } from '@nestjs/common';
import { ObjectService } from './object.service';
import { ObjectController } from './object.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [ObjectController],
  providers: [ObjectService],
  imports: [PrismaModule]
})
export class ObjectModule {}
