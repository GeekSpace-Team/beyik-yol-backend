import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards, BadRequestException
} from "@nestjs/common";
import { CarBrandService } from "./car-brand.service";
import { CreateCarBrandDto } from "./dto/create-car-brand.dto";
import { UpdateCarBrandDto } from "./dto/update-car-brand.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { diskStorage } from "multer";
import { editFileName } from "../helper/file.helper";
import { isNullValue } from "../helper/utils";

@Controller("car-brand")
export class CarBrandController {
  constructor(private readonly carBrandService: CarBrandService) {
  }

  @Post("create-brand")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/car/car-brand",
      filename: editFileName
    })
  }))
  create(@UploadedFile() file: Express.Multer.File, @Body() createCarBrandDto: CreateCarBrandDto) {
    try {
      return this.carBrandService.create(file.filename, createCarBrandDto);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Get("get-all-carBrand")
  @UseGuards(JwtAuthGuard)
  findAll() {
    try {
      return this.carBrandService.findAll();
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Patch("update-car-brand/:id")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/car/car-brand",
      filename: editFileName
    })
  }))
  update(@UploadedFile() file: Express.Multer.File, @Param("id") id: string, @Body() updateCarBrandDto: CreateCarBrandDto) {
    try {
      if(isNullValue(file)){
        return this.carBrandService.update('', +id, updateCarBrandDto);
      } else {
        return this.carBrandService.update(file.filename, +id, updateCarBrandDto);
      }
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Delete("remove-car-brand/:id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    try {
      return this.carBrandService.remove(+id);
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
