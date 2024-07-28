import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { PoWhereUniqueInput } from "../po/PoWhereUniqueInput";

export type ProductionRecordUpdateInput = {
  productionDateTime?: Date | null;
  expiryDate?: Date | null;
  batchNumber?: string | null;
  sku?: SkuWhereUniqueInput | null;
  po?: PoWhereUniqueInput | null;
};
