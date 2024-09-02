import { TimeEventWhereInput } from "./TimeEventWhereInput";
import { TimeEventOrderByInput } from "./TimeEventOrderByInput";

export type TimeEventFindManyArgs = {
  where?: TimeEventWhereInput;
  orderBy?: Array<TimeEventOrderByInput>;
  skip?: number;
  take?: number;
};
