import { Injectable } from "@nestjs/common";

@Injectable()
export class MathService {
    getSoma(a: number, b: number): number {
        return a + b;
    }

    getSub(a: number, b: number): number {
        return a - b;
    }

    getMul(a: number, b: number): number {
        return a * b;
    }

    getDiv(a: number, b: number): number {
        return a / b;
    }
}


