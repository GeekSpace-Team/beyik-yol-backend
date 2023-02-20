"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createUserDto) {
        return "This action adds a new user";
    }
    async findAll(page, limit) {
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
                    createdAt: 'desc'
                }]
        }).then(result => {
            res = result;
        });
        return {
            page_count: page_count,
            users: res
        };
    }
    findOne(username) {
        return this.prisma.users.findFirst({ where: { username: username } });
    }
    findById(id) {
        return this.prisma.users.findFirst({ where: { id: id } });
    }
    async toggleBlock(id) {
        let oldData;
        await this.prisma.users.findFirst({ where: { id: id } })
            .then((user) => {
            oldData = user;
        });
        oldData.blocked = !oldData.blocked;
        return this.prisma.users.update({ where: { id: id }, data: oldData });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map