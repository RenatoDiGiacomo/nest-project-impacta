import { Test, TestingModule } from '@nestjs/testing';
import { MathV2Controller } from './math.v2.controller';

describe('MathV2Controller', () => {
  let controller: MathV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathV2Controller],
    }).compile();

    controller = module.get<MathV2Controller>(MathV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
