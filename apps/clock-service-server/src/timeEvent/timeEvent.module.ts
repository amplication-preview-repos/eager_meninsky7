import { Module } from "@nestjs/common";
import { TimeEventModuleBase } from "./base/timeEvent.module.base";
import { TimeEventService } from "./timeEvent.service";
import { TimeEventController } from "./timeEvent.controller";
import { TimeEventResolver } from "./timeEvent.resolver";

@Module({
  imports: [TimeEventModuleBase],
  controllers: [TimeEventController],
  providers: [TimeEventService, TimeEventResolver],
  exports: [TimeEventService],
})
export class TimeEventModule {}
