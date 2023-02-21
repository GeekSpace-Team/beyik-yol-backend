import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post('create-price')
  @UseGuards(JwtAuthGuard)
  create(@Body() createPriceDto: CreatePriceDto) {
    return this.priceService.create(createPriceDto);
  }

  @Get('get-all-prices')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.priceService.findAll();
  }


  @Patch('update-price/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updatePriceDto: CreatePriceDto) {
    return this.priceService.update(+id, updatePriceDto);
  }

  @Delete('delete-price/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.priceService.remove(+id);
  }
}
