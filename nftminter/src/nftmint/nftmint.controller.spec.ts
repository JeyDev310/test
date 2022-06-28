import { Test, TestingModule } from '@nestjs/testing';
import { NftmintController } from './nftmint.controller';

describe('NftmintController', () => {
  let controller: NftmintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftmintController],
    }).compile();

    controller = module.get<NftmintController>(NftmintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
