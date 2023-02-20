import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile, BadRequestException
} from "@nestjs/common";
import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "../helper/file.helper";
import { CreateCarBrandDto } from "../car-brand/dto/create-car-brand.dto";
import { isNullValue } from "../helper/utils";

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post("create-ads")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/car/ads",
      filename: editFileName
    })
  }))
  create(@UploadedFile() file: Express.Multer.File, @Body() createAdDto: CreateAdDto) {
    try {
      return this.adsService.create(file.filename, createAdDto);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Get('get-all-ads')
  findAll() {
    return this.adsService.findAll();
  }

  @Patch("update-ads/:id")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/car/ads",
      filename: editFileName
    })
  }))
  update(@UploadedFile() file: Express.Multer.File, @Param("id") id: string, @Body() updateAdsDto: CreateAdDto) {
    try {
      if(isNullValue(file)){
        return this.adsService.update('', +id, updateAdsDto);
      } else {
        return this.adsService.update(file.filename, +id, updateAdsDto);
      }
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Delete('delete-ads/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.adsService.remove(+id);
  }
}
