import { Module } from '@nestjs/common';
import { OtherService } from './other.service';
import { OtherController } from './other.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { CarsModule } from "../cars/cars.module";

@Module({
  imports: [PrismaModule,AuthModule,CarsModule],
  controllers: [OtherController],
  providers: [OtherService]
})
export class OtherModule {}
