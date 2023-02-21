import { Module } from '@nestjs/common';
import { MobileAuthService } from './mobile-auth.service';
import { MobileAuthController } from './mobile-auth.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [MobileAuthController],
  providers: [MobileAuthService]
})
export class MobileAuthModule {}
