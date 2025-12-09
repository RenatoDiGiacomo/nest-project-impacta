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


  it('should return soma of two numbers', () => {
    const operation = { a: 5, b: 3 };
    expect(controller.getSomaController(operation)).toBe(8);
  });

  it('should return sub of two numbers', () => {
    const operation = { a: 5, b: 3 };
    expect(controller.getSubController(operation)).toBe(2);
  });
  it('should return mul of two numbers', () => {
    const operation = { a: 5, b: 3 };
    expect(controller.getMulController(operation)).toBe(15);
  });
  it('should return div of two numbers', () => {
    const operation = { a: 6, b: 3 };
    expect(controller.getDivController(operation)).toBe(2);
  });



});
