import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CarTransmitionService } from './car-transmition.service';
import { CreateCarTransmitionDto } from './dto/create-car-transmition.dto';
import { UpdateCarTransmitionDto } from './dto/update-car-transmition.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('car-transmition')
export class CarTransmitionController {
  constructor(private readonly carTransmitionService: CarTransmitionService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarTransmitionDto: CreateCarTransmitionDto) {
    return this.carTransmitionService.create(createCarTransmitionDto);
  }

  @Get('get-all')
  findAll() {
    return this.carTransmitionService.findAll();
  }


  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarTransmitionDto: CreateCarTransmitionDto) {
    return this.carTransmitionService.update(+id, updateCarTransmitionDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.carTransmitionService.remove(+id);
  }
}
