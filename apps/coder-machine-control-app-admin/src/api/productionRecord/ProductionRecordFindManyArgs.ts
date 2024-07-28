import { ProductionRecordWhereInput } from "./ProductionRecordWhereInput";
import { ProductionRecordOrderByInput } from "./ProductionRecordOrderByInput";

export type ProductionRecordFindManyArgs = {
  where?: ProductionRecordWhereInput;
  orderBy?: Array<ProductionRecordOrderByInput>;
  skip?: number;
  take?: number;
};
