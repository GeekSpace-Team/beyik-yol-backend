import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { SubRegionService } from './sub-region.service';
import { CreateSubRegionDto } from './dto/create-sub-region.dto';
import { UpdateSubRegionDto } from './dto/update-sub-region.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('sub-region')
export class SubRegionController {
  constructor(private readonly subRegionService: SubRegionService) {}

  @Post('create-sub-region')
  @UseGuards(JwtAuthGuard)
  create(@Body() createSubRegionDto: CreateSubRegionDto) {
    return this.subRegionService.create(createSubRegionDto);
  }

  @Get('get-all-sub-regions')
  findAll() {
    return this.subRegionService.findAll();
  }


  @Patch('update-sub-region/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateSubRegionDto: CreateSubRegionDto) {
    return this.subRegionService.update(+id, updateSubRegionDto);
  }

  @Delete('remove-sub-region/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.subRegionService.remove(+id);
  }
}
