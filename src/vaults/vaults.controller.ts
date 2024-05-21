import { Controller, Get, Param } from '@nestjs/common';
import { VaultsService } from './vaults.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vaults')
@Controller('vaults')
export class VaultsController {
  constructor(private readonly vaultsService: VaultsService) {}

  @Get()
  findAll() {
    return this.vaultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vaultsService.findOne(id);
  }
}
