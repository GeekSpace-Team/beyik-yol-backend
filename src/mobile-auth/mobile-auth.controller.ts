import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MobileAuthService } from './mobile-auth.service';
import { CreateMobileAuthDto } from './dto/create-mobile-auth.dto';
import { UpdateMobileAuthDto } from './dto/update-mobile-auth.dto';
import { CheckedNumberDto } from "./dto/checked-number.dto";
import { SendNumberDto } from "./dto/send-number.dto";

@Controller('mobile-auth')
export class MobileAuthController {
  constructor(private readonly mobileAuthService: MobileAuthService) {}

  @Post('check-phone-number/:phone')
  checkNumber(@Param('phone') phone: string) {
    return this.mobileAuthService.checkPhoneNumber(phone);
  }

  @Post('send-number')
  sendNumber(@Body() body: SendNumberDto){
     return  this.mobileAuthService.sendNumber(body.number);
  }
}
