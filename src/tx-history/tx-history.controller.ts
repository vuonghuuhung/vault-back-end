import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TxHistoryService } from './tx-history.service';
import { CreateTxHistoryDto } from './dto/create-tx-history.dto';
import { TxHistory } from './entities/tx-history.entity';

@Controller('tx-history')
export class TxHistoryController {
  constructor(private readonly txHistoryService: TxHistoryService) {}

  @Post()
  create(@Body() createTxHistoryDto: CreateTxHistoryDto) {
    return this.txHistoryService.create(createTxHistoryDto);
  }

  @Get()
  async findAll(
    @Query('vaullt') vault: string,
    @Query('address') address: string,
  ): Promise<TxHistory[]> {
    return this.txHistoryService.findAll(vault, address);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.txHistoryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.txHistoryService.remove(+id);
  }
}
