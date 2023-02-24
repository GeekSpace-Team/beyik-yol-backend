import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ChangeTypeService } from './change-type.service';
import { CreateChangeTypeDto } from './dto/create-change-type.dto';
import { UpdateChangeTypeDto } from './dto/update-change-type.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('change-type')
export class ChangeTypeController {
  constructor(private readonly changeTypeService: ChangeTypeService) {}

  @Post('create-change-type')
  @UseGuards(JwtAuthGuard)
  create(@Body() createChangeTypeDto: CreateChangeTypeDto) {
    return this.changeTypeService.create(createChangeTypeDto);
  }

  @Get('find-all-change-types')
  findAll() {
    return this.changeTypeService.findAll();
  }

  @Patch('update-change-type/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateChangeTypeDto: CreateChangeTypeDto) {
    return this.changeTypeService.update(+id, updateChangeTypeDto);
  }

  @Delete('delete-change-type/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.changeTypeService.remove(+id);
  }
}
