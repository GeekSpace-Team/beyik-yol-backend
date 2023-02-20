import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesModule } from "./articles/articles.module";
import { AuthModule } from "./auth/auth.module";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { CarsModule } from "./cars/cars.module";
import { HttpExceptionFilter } from "./exceptions/exception.filter";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { Module } from "@nestjs/common";
import { APP_FILTER, APP_GUARD } from "@nestjs/core";
import { CarBrandModule } from './car-brand/car-brand.module';
import { MulterModule } from "@nestjs/platform-express";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarModelModule } from './car-model/car-model.module';
import { CarOptionModule } from './car-option/car-option.module';
import { CarEngineModule } from './car-engine/car-engine.module';
import { CarTransmitionModule } from './car-transmition/car-transmition.module';
import { CarImageModule } from './car-image/car-image.module';
import { EvacuatorModule } from './evacuator/evacuator.module';
import { RegionModule } from './region/region.module';
import { SubRegionModule } from './sub-region/sub-region.module';

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, CarsModule, AuthModule, CarBrandModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'upload'),
  }), MulterModule.registerAsync({
    useFactory: () => ({
      dest: './upload'
    })
  }), CarModelModule, CarOptionModule, CarEngineModule, CarTransmitionModule, CarImageModule, EvacuatorModule, RegionModule, SubRegionModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
