import { TimeEventWhereUniqueInput } from "./TimeEventWhereUniqueInput";
import { TimeEventUpdateInput } from "./TimeEventUpdateInput";

export type UpdateTimeEventArgs = {
  where: TimeEventWhereUniqueInput;
  data: TimeEventUpdateInput;
};
