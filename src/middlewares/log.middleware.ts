import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LogMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // console.log(`RES`, res.json())
        // console.log(`REQ`, req.method)
        console.log(`[${new Date().toISOString()}] INI ${req.method} ${req.url}`);
        next();
        console.log(`[${new Date().toISOString()}] FIM ${req.method} ${req.url}`);
    }
}   