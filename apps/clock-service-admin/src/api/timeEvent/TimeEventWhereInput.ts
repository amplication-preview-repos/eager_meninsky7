import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TimeEventWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
