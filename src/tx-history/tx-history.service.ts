import { Injectable, Logger } from '@nestjs/common';
import { CreateTxHistoryDto } from './dto/create-tx-history.dto';
import { JsonRpcProvider } from 'ethers';
import { ContractClient } from 'src/web3/contract-client';
import { VaultV1__factory } from 'vault-contract-sdk';
import { DepositEvent } from './types/deposit-event.type';
import { WithdrawEvent } from './types/withdraw-event.type';
import { InjectModel } from '@nestjs/mongoose';
import { TxHistory } from './entities/tx-history.entity';
import { Model } from 'mongoose';

@Injectable()
export class TxHistoryService {
  private readonly logger = new Logger(TxHistoryService.name);
  private readonly provider: JsonRpcProvider;

  constructor(
    @InjectModel(TxHistory.name)
    private readonly txHistoryModel: Model<TxHistory>,
  ) {
    this.provider = ContractClient.getProvider();

    this.logger.log(
      'DepositsService is initialized, filtering event DepoisitCreated...',
    );

    this.subcribeDepositEvent();
    this.subcribeWithdrawEvent();
  }

  subcribeDepositEvent(): void {
    const abi = VaultV1__factory.createInterface();
    const topicHash = abi.getEvent('Deposit').topicHash;
    this.provider.on({ topics: [topicHash] }, async (log) => {
      const txHash = log.transactionHash;
      const txReceipt = await this.provider.getTransactionReceipt(txHash);
      const from = txReceipt.from;
      const to = txReceipt.to;
      const timestamp = (await this.provider.getBlock(txReceipt.blockNumber))
        .timestamp;
      const date = new Date(timestamp * 1000);
      const depositEvent = txReceipt.logs
        .map((log) => abi.parseLog(log))
        .find((event) => event.name === 'Deposit');

      const [sender, receiver, assets, shares] = depositEvent.args;

      const depositEventData: DepositEvent = {
        sender,
        receiver,
        assets: assets.toString(),
        shares: shares.toString(),
      };

      const depositData: CreateTxHistoryDto = {
        block: txReceipt.blockNumber,
        eventName: depositEvent.name,
        txHash,
        from,
        to,
        date,
        logs: JSON.stringify(depositEventData),
      };

      const savedTxHistory = await this.create(depositData);
      console.log({ savedTxHistory });
    });
  }

  subcribeWithdrawEvent(): void {
    const abi = VaultV1__factory.createInterface();
    const topicHash = abi.getEvent('Withdraw').topicHash;
    this.provider.on({ topics: [topicHash] }, async (log) => {
      const txHash = log.transactionHash;
      const txReceipt = await this.provider.getTransactionReceipt(txHash);
      const from = txReceipt.from;
      const to = txReceipt.to;
      const timestamp = (await this.provider.getBlock(txReceipt.blockNumber))
        .timestamp;
      const date = new Date(timestamp * 1000);
      const withdrawEvent = txReceipt.logs
        .map((log) => abi.parseLog(log))
        .find((event) => event.name === 'Withdraw');

      const [sender, receiver, owner, assets, shares] = withdrawEvent.args;

      const withdrawEventData: WithdrawEvent = {
        sender,
        receiver,
        owner,
        assets: assets.toString(),
        shares: shares.toString(),
      };

      const withdrawData: CreateTxHistoryDto = {
        block: txReceipt.blockNumber,
        eventName: withdrawEvent.name,
        txHash,
        from,
        to,
        date,
        logs: JSON.stringify(withdrawEventData),
      };

      const savedTxHistory = await this.create(withdrawData);
      console.log({ savedTxHistory });
    });
  }

  async create(createTxHistoryDto: CreateTxHistoryDto) {
    const createdTxHistory =
      await this.txHistoryModel.create(createTxHistoryDto);
    return createdTxHistory;
  }

  async findAll(vault: string, address: string): Promise<TxHistory[]> {
    // get the tx history from the database has from = address and to = vault
    try {
      const txHistories = await this.txHistoryModel
        .find({
          from: address,
          to: vault,
        })
        .exec();
      return txHistories;
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} txHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} txHistory`;
  }
}
