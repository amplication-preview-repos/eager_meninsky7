import { Injectable } from "@nestjs/common";

@Injectable()
export class TimeModuleService {
  constructor() {}
  async GetCurrentTime(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
