import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post('create-region')
  @UseGuards(JwtAuthGuard)
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Get('get-all-regions')
  findAll() {
    return this.regionService.findAll();
  }

  @Patch('update-region/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateRegionDto: CreateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @Delete('remove-region/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
