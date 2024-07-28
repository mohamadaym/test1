import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { ProductionRecordCreateNestedManyWithoutPosInput } from "./ProductionRecordCreateNestedManyWithoutPosInput";

export type PoCreateInput = {
  numberField?: string | null;
  sku?: SkuWhereUniqueInput | null;
  productionRecords?: ProductionRecordCreateNestedManyWithoutPosInput;
};
