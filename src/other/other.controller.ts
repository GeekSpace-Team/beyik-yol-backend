import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherService } from './other.service';
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';

@Controller('other')
export class OtherController {
  constructor(private readonly otherService: OtherService) {}


  @Get('get-types')
  findAll() {
    return this.otherService.findAll();
  }
}
