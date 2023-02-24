import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from "@nestjs/common";
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

  @Get('get-home')
  getHome(@Request() req) {
    let token = req.headers['authorization'];
    try {
      token = token.split(' ')[1];
    } catch (err) {}
    return this.otherService.getHome(token);
  }
}
