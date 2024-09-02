import * as graphql from "@nestjs/graphql";
import { TimeEventResolverBase } from "./base/timeEvent.resolver.base";
import { TimeEvent } from "./base/TimeEvent";
import { TimeEventService } from "./timeEvent.service";

@graphql.Resolver(() => TimeEvent)
export class TimeEventResolver extends TimeEventResolverBase {
  constructor(protected readonly service: TimeEventService) {
    super(service);
  }
}
