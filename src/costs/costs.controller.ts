import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Request } from "@nestjs/common";
import { CostsService } from './costs.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { CostFuelDto } from "./dto/cost-fuel.dto";
import { CostChangeDto } from "./dto/cost-change.dto";
import { CostRepairDto } from "./dto/cost-repair.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('costs')
export class CostsController {
  constructor(private readonly costsService: CostsService) {}


  @Post('create-cost')
  @UseGuards(JwtAuthGuard)
  createChangeCost(@Body() costChangeDto: CostChangeDto,@Request() req) {
    return this.costsService.createChange(costChangeDto,+req.user['userId']);
  }

  @Get('get-costs-by-car-id/:id')
  @UseGuards(JwtAuthGuard)
  getCostsByCarId(@Param('id') id: string,@Query('type') type: string){
    return this.costsService.getByCarId(+id, type);
  }

  @Get('get-costs-by-id/:id')
  @UseGuards(JwtAuthGuard)
  getCostsById(@Param('id') id: string){
    return this.costsService.getById(+id);
  }

  @Patch('update-cost/:id')
  @UseGuards(JwtAuthGuard)
  updateCost(@Param("id") id: string,@Body() costChangeDto: CostChangeDto) {
    return this.costsService.updateCost(+id, costChangeDto);
  }

  @Delete('delete-cost/:id')
  @UseGuards(JwtAuthGuard)
  deleteCost(@Param("id") id: string) {
    return this.costsService.deleteCost(+id);
  }
}
