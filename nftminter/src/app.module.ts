import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftmintModule } from './nftmint/nftmint.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [NftmintModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
