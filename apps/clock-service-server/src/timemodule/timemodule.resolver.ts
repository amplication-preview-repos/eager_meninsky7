import * as graphql from "@nestjs/graphql";
import { TimeModuleService } from "./timemodule.service";

export class TimeModuleResolver {
  constructor(protected readonly service: TimeModuleService) {}

  @graphql.Query(() => String)
  async GetCurrentTime(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GetCurrentTime(args);
  }
}
