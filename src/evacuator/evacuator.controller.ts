import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { EvacuatorService } from './evacuator.service';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('evacuator')
export class EvacuatorController {
  constructor(private readonly evacuatorService: EvacuatorService) {}

  @Post('create-evacuator')
  @UseGuards(JwtAuthGuard)
  create(@Body() createEvacuatorDto: CreateEvacuatorDto) {
    return this.evacuatorService.create(createEvacuatorDto);
  }

  @Get('get-all-evacuators')
  findAll() {
    return this.evacuatorService.findAll();
  }

  @Patch('update-evacuator/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateEvacuatorDto: CreateEvacuatorDto) {
    return this.evacuatorService.update(+id, updateEvacuatorDto);
  }

  @Delete('delete-evacuator/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.evacuatorService.remove(+id);
  }

  @Get('get-all-evacuators-mobile?')
  findAllMobile(@Query("region") region: string) {
    return this.evacuatorService.findAllMobile(+region);
  }

}
