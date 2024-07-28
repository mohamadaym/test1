import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { ProductionRecordUpdateManyWithoutPosInput } from "./ProductionRecordUpdateManyWithoutPosInput";

export type PoUpdateInput = {
  numberField?: string | null;
  sku?: SkuWhereUniqueInput | null;
  productionRecords?: ProductionRecordUpdateManyWithoutPosInput;
};
