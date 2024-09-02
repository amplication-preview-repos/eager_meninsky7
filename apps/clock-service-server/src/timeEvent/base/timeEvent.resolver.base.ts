/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TimeEvent } from "./TimeEvent";
import { TimeEventCountArgs } from "./TimeEventCountArgs";
import { TimeEventFindManyArgs } from "./TimeEventFindManyArgs";
import { TimeEventFindUniqueArgs } from "./TimeEventFindUniqueArgs";
import { CreateTimeEventArgs } from "./CreateTimeEventArgs";
import { UpdateTimeEventArgs } from "./UpdateTimeEventArgs";
import { DeleteTimeEventArgs } from "./DeleteTimeEventArgs";
import { TimeEventService } from "../timeEvent.service";
@graphql.Resolver(() => TimeEvent)
export class TimeEventResolverBase {
  constructor(protected readonly service: TimeEventService) {}

  async _timeEventsMeta(
    @graphql.Args() args: TimeEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TimeEvent])
  async timeEvents(
    @graphql.Args() args: TimeEventFindManyArgs
  ): Promise<TimeEvent[]> {
    return this.service.timeEvents(args);
  }

  @graphql.Query(() => TimeEvent, { nullable: true })
  async timeEvent(
    @graphql.Args() args: TimeEventFindUniqueArgs
  ): Promise<TimeEvent | null> {
    const result = await this.service.timeEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TimeEvent)
  async createTimeEvent(
    @graphql.Args() args: CreateTimeEventArgs
  ): Promise<TimeEvent> {
    return await this.service.createTimeEvent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TimeEvent)
  async updateTimeEvent(
    @graphql.Args() args: UpdateTimeEventArgs
  ): Promise<TimeEvent | null> {
    try {
      return await this.service.updateTimeEvent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TimeEvent)
  async deleteTimeEvent(
    @graphql.Args() args: DeleteTimeEventArgs
  ): Promise<TimeEvent | null> {
    try {
      return await this.service.deleteTimeEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
