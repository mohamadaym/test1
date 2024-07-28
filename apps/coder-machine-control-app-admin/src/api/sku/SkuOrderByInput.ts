import { SortOrder } from "../../util/SortOrder";

export type SkuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  shelfLife?: SortOrder;
  name?: SortOrder;
};
