import { Module } from "@nestjs/common";
import { AppMathCalcController } from "./app.mathcalc.controller";
import { AppMathCalcService } from "./app.math.service";

@Module({
    imports: [],
    controllers: [AppMathCalcController],
    providers: [AppMathCalcService],
})
export class MathModule { }
