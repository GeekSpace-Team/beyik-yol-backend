import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectService } from './object.service';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';

@Controller('object')
export class ObjectController {
  constructor(private readonly objectService: ObjectService) {}

  @Post('create-object')
  create(@Body() createObjectDto: CreateObjectDto) {
    return this.objectService.create(createObjectDto);
  }

  @Get('get-all-objects')
  findAll() {
    return this.objectService.findAll();
  }

  @Get('get-single-object/:id')
  findOne(@Param('id') id: string) {
    return this.objectService.findOne(+id);
  }

  @Patch('update-object/:id')
  update(@Param('id') id: string, @Body() updateObjectDto: UpdateObjectDto) {
    return this.objectService.update(+id, updateObjectDto);
  }

  @Delete('delete-object/:id')
  remove(@Param('id') id: string) {
    return this.objectService.remove(+id);
  }
}
