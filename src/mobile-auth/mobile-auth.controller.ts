import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
  UseInterceptors, UploadedFile, BadRequestException
} from "@nestjs/common";
import { MobileAuthService } from './mobile-auth.service';
import { CreateMobileAuthDto } from './dto/create-mobile-auth.dto';
import { UpdateMobileAuthDto } from './dto/update-mobile-auth.dto';
import { CheckedNumberDto } from "./dto/checked-number.dto";
import { SendNumberDto } from "./dto/send-number.dto";
import { CheckCodeDto } from "./dto/check-code.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "../helper/file.helper";
import { CreateAdDto } from "../ads/dto/create-ad.dto";

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

  @Post('accept-number')
  acceptNumber(@Body() body: SendNumberDto){
    return  this.mobileAuthService.acceptPhone(body.number);
  }

  @Post('check-code')
  checkCode(@Body() body: CheckCodeDto){
    return  this.mobileAuthService.checkNumber(body.number,body.uuid);
  }

  @Get('get-profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req){
    return this.mobileAuthService.getProfile(+req.user['userId']);
  }

  @Put('edit-profile')
  @UseGuards(JwtAuthGuard)
  editProfile(@Request() req, @Body() body: CreateUserDto){
    return this.mobileAuthService.editProfile(+req.user['userId'], body);
  }

  @Put("change-image")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload/users/images/",
      filename: editFileName
    })
  }))
  changeImage(@UploadedFile() file: Express.Multer.File,@Request() req) {
    try {
      return this.mobileAuthService.changeImage(file.filename, +req.user['userId']);
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
