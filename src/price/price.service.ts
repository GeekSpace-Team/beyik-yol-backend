import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { PrismaService } from "../prisma/prisma.service";
import { create } from 'domain';

@Injectable()
export class PriceService {
  constructor(private readonly prisma: PrismaService){}
  create(createPriceDto: CreatePriceDto) {
    return this.prisma.constantPrices.create({
      data: createPriceDto
    });
  }

  findAll() {
    return this.prisma.constantPrices.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }


  update(id: number, updatePriceDto: CreatePriceDto) {
    return this.prisma.constantPrices.update({
      where: {id: id},
      data: updatePriceDto
    });
  }

  remove(id: number) {
    return this.prisma.constantPrices.delete({
      where: {id: id},
    });
  }
}
