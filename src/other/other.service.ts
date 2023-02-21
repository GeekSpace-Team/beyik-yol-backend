import { Injectable } from '@nestjs/common';
import { Device, LoginLogType,EventType,PageType,ConstantPriceType,ObjectPermissions,AdsStatus,ItemStatus,ObjectType,ObjectStatus,UserStatus,ImageType,Permissions,ConstantTypes } from '@prisma/client';
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';

@Injectable()
export class OtherService {
  findAll() {
    return {
      device: Object.keys(Device),
      loginType: Object.keys(LoginLogType),
      eventType: Object.keys(EventType),
      pageType: Object.keys(PageType),
      priceType: Object.keys(ConstantPriceType),
      objectPermissions: Object.keys(ObjectPermissions),
      adsStatus: Object.keys(AdsStatus),
      itemStatus: Object.keys(ItemStatus),
      userStatus: Object.keys(UserStatus),
      objectStatus: Object.keys(ObjectStatus),
      objectType: Object.keys(ObjectType),
      imageType: Object.keys(ImageType),
      permissions: Object.keys(Permissions),
      constantType: Object.keys(ConstantTypes)
    };
  }

}
