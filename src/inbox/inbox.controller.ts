import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { InboxService } from './inbox.service';
import { CreateInboxDto } from './dto/create-inbox.dto';
import { UpdateInboxDto } from './dto/update-inbox.dto';
import { PrismaService } from "../prisma/prisma.service";
import { NotificationsService } from "../notification/notification.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('inbox')
export class InboxController {

  constructor(private readonly inboxService: InboxService) {}

  @Post('send-to-all')
  @UseGuards(JwtAuthGuard)
  create(@Body() createInboxDto: CreateInboxDto) {
    return this.inboxService.sendToAll(createInboxDto);
  }

  @Post('send-to-user')
  @UseGuards(JwtAuthGuard)
  sendToUser(@Body() createInboxDto: CreateInboxDto) {
    return this.inboxService.sendToUser(createInboxDto);
  }

  @Get('get-all-inbox')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.inboxService.findAll();
  }

  @Delete('delete-inbox/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.inboxService.remove(+id);
  }
}
