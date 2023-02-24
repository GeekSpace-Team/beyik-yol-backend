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

  findById(id: number) {
    return this.prisma.users.findFirst({
      where: { id: id },
      include: {
        cars: true,
        inbox: true,
        FCMToken: true
      }
    });
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


}
