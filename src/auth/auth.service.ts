import * as bcrypt from "bcrypt";
import { UsersService } from "./../users/users.service";
import { SignInDto } from "./dto/sign-in.dto";
import { Injectable, NotAcceptableException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getProfile(id: number){
    return this.usersService.findById(id);
  }

  async getUser(token: string) {
    return this.jwtService.verify(token, jwtConstants);
  }
}