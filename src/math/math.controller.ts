import { Controller, Get, Query, VERSION_NEUTRAL } from "@nestjs/common";
import { MathService } from "./math.service";

@Controller({
    path: 'math',
    version: ['1', VERSION_NEUTRAL]
})
export class MathController {
    constructor(private readonly appService: MathService) { }
    @Get('soma')
    getSomaController(@Query('a') a: string, @Query('b') b: string): number {
        return this.appService.getSoma(Number(a), Number(b));
    }

    @Get('sub')
    getSubController(@Query('a') a: string, @Query('b') b: string): number {
        return this.appService.getSub(Number(a), Number(b));
    }

    @Get('mul')
    getMulController(@Query('a') a: string, @Query('b') b: string): number {
        return this.appService.getMul(Number(a), Number(b));
    }


    @Get('div')
    getDivController(@Query('a') a: string, @Query('b') b: string): number {
        return this.appService.getDiv(Number(a), Number(b));
    }

}

