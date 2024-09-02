import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TimeModuleService } from "./timemodule.service";

@swagger.ApiTags("timeModules")
@common.Controller("timeModules")
export class TimeModuleController {
  constructor(protected readonly service: TimeModuleService) {}

  @common.Get("/current-time")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCurrentTime(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetCurrentTime(body);
      }
}
