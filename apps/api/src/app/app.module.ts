import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlBridgeController } from './graphql-bridge/graphql-bridge.controller';
import {ConfigModule} from '@nestjs/config';
import { LoginController } from './login/login.controller';
import { OrderController } from './order/order.controller';
import { PickjobsController } from './pickjobs/pickjobs.controller';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [AppController, GraphqlBridgeController, LoginController, OrderController, PickjobsController],
  providers: [AppService],
})
export class AppModule {}
