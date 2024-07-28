import { SortOrder } from "../../util/SortOrder";

export type PoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  numberField?: SortOrder;
  skuId?: SortOrder;
};
