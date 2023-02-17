import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CarModelService } from './car-model.service';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Post('create-car-model')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarModelDto: CreateCarModelDto) {
    return this.carModelService.create(createCarModelDto);
  }

  @Get('get-all-models')
  findAll() {
    return this.carModelService.findAll();
  }

  @Get('get-model-by-brand-id/:id')
  findOne(@Param('id') id: string) {
    return this.carModelService.findOne(+id);
  }

  @Patch('update-car-model/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarModelDto: CreateCarModelDto) {
    return this.carModelService.update(+id, updateCarModelDto);
  }

  @Delete('delete-car-model/:id')
  remove(@Param('id') id: string) {
    return this.carModelService.remove(+id);
  }
}
