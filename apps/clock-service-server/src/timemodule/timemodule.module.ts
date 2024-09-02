import { Module } from "@nestjs/common";
import { TimeModuleService } from "./timemodule.service";
import { TimeModuleController } from "./timemodule.controller";
import { TimeModuleResolver } from "./timemodule.resolver";

@Module({
  controllers: [TimeModuleController],
  providers: [TimeModuleService, TimeModuleResolver],
  exports: [TimeModuleService],
})
export class TimeModuleModule {}
