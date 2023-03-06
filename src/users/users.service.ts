import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto
    });
  }

  async findAll(page: number, limit: number) {
    let page_count = 0, res = [];
    await this.prisma.users.findMany()
      .then(result => {
        page_count = result.length;
      });
    await this.prisma.users.findMany({
      skip: limit * (page - 1),
      take: limit,
      include: {
        cars: true,
        Events: true,
        LoginHistory: true,
        FCMToken: true,
        carShare: true
      },
      orderBy: [{
        createdAt: "desc"
      }]
    }).then(result => {
      res = result;
    });
    return {
      page_count: page_count,
      users: res
    };
  }

  findOne(username: string) {
    return this.prisma.users.findFirst({ where: { username: username } });
  }

  async findById(id: number) {
    let prices = [],res={};
    await this.prisma.car.findMany({
      where: {usersId: id},
      select: {
        id: true
      }
    }).then(async result => {
      prices = await this.prisma.costChange.findMany({
        where: {
          carId: {
            in: result.map(car=> car.id)
          }
        },
        select: {
          price: true
        }
      })
    })
    await this.prisma.users.findFirst({
      where: { id: id },
      include: {
        cars: true,
        inbox: true,
        FCMToken: true
      }
    }).then(result => {
      let costs=0;
      try{
        costs = prices.map(it=>it.price).reduce((a,b)=> a+b)
      } catch (err){}
      res = {
        ...result,
        costs: costs
      }
    })
    return res;
  }

  async toggleBlock(id: number) {
    let oldData;
    await this.prisma.users.findFirst({ where: { id: id } })
      .then((user) => {
        oldData = user;
      });
    oldData.blocked = !oldData.blocked;
    return this.prisma.users.update({ where: { id: id }, data: oldData });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  async findAllFull() {
    return  this.prisma.users.findMany({
      include: {
        cars: true,
        Events: true,
        LoginHistory: true,
        FCMToken: true,
        carShare: true
      },
      orderBy: [{
        createdAt: "desc"
      }]
    })
  }
}
