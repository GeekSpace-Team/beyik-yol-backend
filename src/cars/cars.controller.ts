import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('add-car')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get('get-all-cars')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.carsService.findAll();
  }

  @Get('get-user-cars')
  @UseGuards(JwtAuthGuard)
  getUserCars(@Request() req) {
    return this.carsService.getUserCars(+req.user['userId']);
  }

  @Get('get-car-by-id/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Get('get-add-car-details')
  getAddCarDetails() {
    return this.carsService.getAddCarDetails();
  }

  @Patch('update-car/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarDto: CreateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Patch('update-user-cars')
  @UseGuards(JwtAuthGuard)
  updateUserCars(@Request() req, @Body() updateCarDto: CreateCarDto[]) {
    return this.carsService.updateUserCars(+req.user['userId'], updateCarDto);
  }

  @Delete('delete-car/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
