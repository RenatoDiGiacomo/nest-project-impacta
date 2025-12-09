import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { LogMiddleware } from './middlewares/log.middleware';

@Module({
  imports: [MathModule],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('math');
  }
}
