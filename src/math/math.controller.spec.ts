import { Test, TestingModule } from '@nestjs/testing';

import { MathController } from './math.controller';
import { MathService } from './math.service';
import { MathV2Controller } from 'src/math.v2/math.v2.controller';


describe('MathController', () => {
    let appController: MathController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [MathController, MathV2Controller],
            providers: [MathService],
        }).compile();

        appController = app.get<MathController>(MathController);
    });

    describe('root', () => {
        it('should return soma of two numbers', () => {
            expect(appController.getSomaController('5', '3')).toBe(8);
        });

        it('should return sub of two numbers', () => {
            expect(appController.getSubController('5', '3')).toBe(2);
        });
        it('should return mul of two numbers', () => {
            expect(appController.getMulController('5', '3')).toBe(15);
        }
        );
        it('should return div of two numbers', () => {
            expect(appController.getDivController('6', '3')).toBe(2);
        });

    });
});
