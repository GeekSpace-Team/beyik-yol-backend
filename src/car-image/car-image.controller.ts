import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UseGuards, UploadedFile
} from "@nestjs/common";
import { CarImageService } from './car-image.service';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { UpdateCarImageDto } from './dto/update-car-image.dto';
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "../helper/file.helper";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CarImage } from "./entities/car-image.entity";

@Controller('car-image')
export class CarImageController {
  constructor(private readonly carImageService: CarImageService) {}

  @Post('add-image/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor("image", 20,{
    storage: diskStorage({
      destination: "./upload/car/image",
      filename: editFileName
    })
  }))
  create(@UploadedFiles() files: Array<Express.Multer.File>,@Param('id') id: string) {
    let images: CreateCarImageDto[]=[];
    files.forEach(file => {
      images.push({
        carId: parseInt(id),
        status: 'ACTIVE',
        url:file.filename,
        type: 'LARGE'
      })
    })
    return this.carImageService.create(images);
  }

  @Patch('update-car-image/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/car/image",
      filename: editFileName
    })
  }))
  update(@UploadedFile() file: Express.Multer.File,@Param('id') id: string, @Body() updateCarImageDto: CreateCarImageDto) {
    updateCarImageDto.url=file.filename;
    updateCarImageDto.carId=parseInt(String(updateCarImageDto.carId));
    return this.carImageService.update(+id, updateCarImageDto);
  }

  @Delete('remove-car-image/:id')
  remove(@Param('id') id: string) {
    return this.carImageService.remove(+id);
  }
}