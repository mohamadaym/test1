import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { ProductionRecordListRelationFilter } from "../productionRecord/ProductionRecordListRelationFilter";

export type PoWhereInput = {
  id?: StringFilter;
  numberField?: StringNullableFilter;
  sku?: SkuWhereUniqueInput;
  productionRecords?: ProductionRecordListRelationFilter;
};
