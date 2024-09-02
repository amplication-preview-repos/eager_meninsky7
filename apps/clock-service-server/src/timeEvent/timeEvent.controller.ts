import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeEventService } from "./timeEvent.service";
import { TimeEventControllerBase } from "./base/timeEvent.controller.base";

@swagger.ApiTags("timeEvents")
@common.Controller("timeEvents")
export class TimeEventController extends TimeEventControllerBase {
  constructor(protected readonly service: TimeEventService) {
    super(service);
  }
}
