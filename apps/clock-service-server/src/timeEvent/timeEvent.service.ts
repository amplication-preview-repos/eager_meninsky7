import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeEventServiceBase } from "./base/timeEvent.service.base";

@Injectable()
export class TimeEventService extends TimeEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
