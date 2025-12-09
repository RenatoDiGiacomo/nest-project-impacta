import { Module } from "@nestjs/common";
import { MathController } from "./math.controller";
import { MathService } from "./math.service";
import { MathV2Controller } from "src/math.v2/math.v2.controller";


@Module({
    imports: [],
    controllers: [MathController, MathV2Controller],
    providers: [MathService],
})
export class MathModule { }
