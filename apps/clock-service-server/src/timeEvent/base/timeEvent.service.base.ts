/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TimeEvent as PrismaTimeEvent } from "@prisma/client";

export class TimeEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TimeEventCountArgs, "select">
  ): Promise<number> {
    return this.prisma.timeEvent.count(args);
  }

  async timeEvents(
    args: Prisma.TimeEventFindManyArgs
  ): Promise<PrismaTimeEvent[]> {
    return this.prisma.timeEvent.findMany(args);
  }
  async timeEvent(
    args: Prisma.TimeEventFindUniqueArgs
  ): Promise<PrismaTimeEvent | null> {
    return this.prisma.timeEvent.findUnique(args);
  }
  async createTimeEvent(
    args: Prisma.TimeEventCreateArgs
  ): Promise<PrismaTimeEvent> {
    return this.prisma.timeEvent.create(args);
  }
  async updateTimeEvent(
    args: Prisma.TimeEventUpdateArgs
  ): Promise<PrismaTimeEvent> {
    return this.prisma.timeEvent.update(args);
  }
  async deleteTimeEvent(
    args: Prisma.TimeEventDeleteArgs
  ): Promise<PrismaTimeEvent> {
    return this.prisma.timeEvent.delete(args);
  }
}
