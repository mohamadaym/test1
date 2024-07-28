import { SortOrder } from "../../util/SortOrder";

export type ProductionRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  productionDateTime?: SortOrder;
  expiryDate?: SortOrder;
  batchNumber?: SortOrder;
  skuId?: SortOrder;
  poId?: SortOrder;
};
