import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get-all-users')
  @UseGuards(JwtAuthGuard)
  findAll(@Query("page") page: string, @Query("limit") limit: string) {
    return this.usersService.findAll(+page,+limit);
  }


  @Get('get-all-users-full')
  @UseGuards(JwtAuthGuard)
  findFull() {
    return this.usersService.findAllFull();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Patch('toggle-user-block/:id')
  @UseGuards(JwtAuthGuard)
  toggleUserBlock(@Param('id') id: string) {
    return this.usersService.toggleBlock(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
