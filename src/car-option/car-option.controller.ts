import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CarOptionService } from './car-option.service';
import { CreateCarOptionDto } from './dto/create-car-option.dto';
import { UpdateCarOptionDto } from './dto/update-car-option.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('car-option')
export class CarOptionController {
  constructor(private readonly carOptionService: CarOptionService) {}

  @Post('add-car-option')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarOptionDto: CreateCarOptionDto) {
    return this.carOptionService.create(createCarOptionDto);
  }

  @Get('get-car-options')
  findAll() {
    return this.carOptionService.findAll();
  }

  @Patch('update-car-option/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarOptionDto: CreateCarOptionDto) {
    return this.carOptionService.update(+id, updateCarOptionDto);
  }

  @Delete('delete-car-option/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.carOptionService.remove(+id);
  }
}
