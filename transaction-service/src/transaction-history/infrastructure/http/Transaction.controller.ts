import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ITransactionService } from '../../application/services/ITransactionService';
import { TransactionCreate } from './types/Transaction.types';
import { TransactionDetailModel } from '../../domain/model/TransactionDetail.model';

@ApiTags('API to manage transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: ITransactionService) {}

  @ApiResponse({
    status: '2XX',
  })
  @ApiResponse({
    status: '5XX',
  })
  @ApiOperation({
    summary: 'Register new Transaction',
    description:
      'Verify that the transaction type exists and created if it not exists',
  })
  @Post()
  async createTransactionStatus(
    @Body() transaction: TransactionCreate,
  ): Promise<any> {
    return this.service.createTransaction(transaction);
  }

  @ApiQuery({
    type: 'string',
    name: 'id',
  })
  @ApiResponse({
    status: '2XX',
  })
  @ApiResponse({
    status: '5XX',
  })
  @ApiOperation({
    summary: 'Get Transaction Detail by id',
    description: 'Get Transaction Detail by id',
  })
  @Get()
  async getAllTransactionCatalogByType(
    @Query('id') id: string,
  ): Promise<TransactionDetailModel> {
    return this.service.findTransactionById(id);
  }
}
