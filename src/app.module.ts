import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/config';
import { CatsModule } from './cats/cats.module';
import { VaultsModule } from './vaults/vaults.module';
import { Web3Service } from './web3/web3.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('mongoose.uri'),
      }),
      inject: [ConfigService],
    }),
    CatsModule,
    VaultsModule,
  ],
  controllers: [AppController],
  providers: [AppService, Web3Service],
})
export class AppModule {}
