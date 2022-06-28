import { Module } from '@nestjs/common';
import { NftmintController } from './nftmint.controller';
import { NftmintService } from './nftmint.service';

@Module({
  controllers: [NftmintController],
  providers: [NftmintService]
})
export class NftmintModule {}
