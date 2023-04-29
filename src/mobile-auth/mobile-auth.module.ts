import { Module } from '@nestjs/common';
import { MobileAuthService } from './mobile-auth.service';
import { MobileAuthController } from './mobile-auth.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../auth/constants";
import { InboxModule } from "../inbox/inbox.module";

@Module({
  imports: [PrismaModule,InboxModule,UsersModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret
    }),],
  controllers: [MobileAuthController],
  providers: [MobileAuthService]
})
export class MobileAuthModule {}
