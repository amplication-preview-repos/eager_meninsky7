import { SortOrder } from "../../util/SortOrder";

export type TimeEventOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
