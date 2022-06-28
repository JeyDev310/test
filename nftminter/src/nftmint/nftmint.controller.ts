import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { NftmintService } from './nftmint.service';

@Controller('nftmint')
export class NftmintController {
    constructor(private nftmintService: NftmintService) { }
    
    @Get('/')
    async getMintedList() {
        return await this.nftmintService.getMintedList();
    }

    @Get('/:ID')
    async getNftById(@Param('ID') id: string) {
        return await this.nftmintService.getNftById(id);
    }

    @Post('/')
    async mintNft(@Body() payload: {walletAddress: string}) {
        return await this.nftmintService.mintNft(payload.walletAddress);
    }
}
