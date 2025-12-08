import { Controller, Get, Query } from "@nestjs/common";
import { AppMathCalcService } from "./app.math.service";

@Controller()
export class AppMathCalcController {
    constructor(private readonly appService: AppMathCalcService) { }
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

