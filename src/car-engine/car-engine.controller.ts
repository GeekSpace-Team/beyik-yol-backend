import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CarEngineService } from './car-engine.service';
import { CreateCarEngineDto } from './dto/create-car-engine.dto';
import { UpdateCarEngineDto } from './dto/update-car-engine.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('car-engine')
export class CarEngineController {
  constructor(private readonly carEngineService: CarEngineService) {}

  @Post('create-car-engine')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarEngineDto: CreateCarEngineDto) {
    return this.carEngineService.create(createCarEngineDto);
  }

  @Get('get-all-car-engine')
  findAll() {
    return this.carEngineService.findAll();
  }


  @Patch('update-car-engine/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarEngineDto: CreateCarEngineDto) {
    return this.carEngineService.update(+id, updateCarEngineDto);
  }

  @Delete('delete-car-engine/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.carEngineService.remove(+id);
  }
}
