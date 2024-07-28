import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PoListRelationFilter } from "../po/PoListRelationFilter";
import { ProductionRecordListRelationFilter } from "../productionRecord/ProductionRecordListRelationFilter";

export type SkuWhereInput = {
  id?: StringFilter;
  shelfLife?: IntNullableFilter;
  name?: StringNullableFilter;
  pos?: PoListRelationFilter;
  productionRecords?: ProductionRecordListRelationFilter;
};
