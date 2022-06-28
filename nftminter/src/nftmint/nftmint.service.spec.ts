import { Test, TestingModule } from '@nestjs/testing';
import { NftmintService } from './nftmint.service';

describe('NftmintService', () => {
  let service: NftmintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftmintService],
    }).compile();

    service = module.get<NftmintService>(NftmintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
