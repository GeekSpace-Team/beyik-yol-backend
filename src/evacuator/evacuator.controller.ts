import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvacuatorService } from './evacuator.service';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { UpdateEvacuatorDto } from './dto/update-evacuator.dto';

@Controller('evacuator')
export class EvacuatorController {
  constructor(private readonly evacuatorService: EvacuatorService) {}

  @Post()
  create(@Body() createEvacuatorDto: CreateEvacuatorDto) {
    return this.evacuatorService.create(createEvacuatorDto);
  }

  @Get()
  findAll() {
    return this.evacuatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evacuatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvacuatorDto: UpdateEvacuatorDto) {
    return this.evacuatorService.update(+id, updateEvacuatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evacuatorService.remove(+id);
  }
}
