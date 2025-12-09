import { Body, Controller, Post, Query } from '@nestjs/common';
import { MathService } from 'src/math/math.service';
import { Operation } from './requests/Operation';

@Controller({
    path: 'math',
    version: '2'
})
export class MathV2Controller {
    constructor(private readonly appService: MathService) { }
    @Post('soma')
    getSomaController(@Body() operation: Operation): number {
        return this.appService.getSoma(operation.a, operation.b);
    }

    @Post('sub')
    getSubController(@Body() operation: Operation): number {
        return this.appService.getSub(operation.a, operation.b);
    }

    @Post('mul')
    getMulController(@Body() operation: Operation): number {
        return this.appService.getMul(operation.a, operation.b);
    }


    @Post('div')
    getDivController(@Body() operation: Operation): number {
        return this.appService.getDiv(operation.a, operation.b);
    }
}
