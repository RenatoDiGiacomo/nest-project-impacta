import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import e from 'express';
import { AppMathCalcService } from './math/app.math.service';
import { AppMathCalcController } from './math/app.mathcalc.controller';
import { MathModule } from './math/math.module';

@Module({
  imports: [MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
