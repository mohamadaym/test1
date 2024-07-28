import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { PoWhereUniqueInput } from "../po/PoWhereUniqueInput";

export type ProductionRecordWhereInput = {
  id?: StringFilter;
  productionDateTime?: DateTimeNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  batchNumber?: StringNullableFilter;
  sku?: SkuWhereUniqueInput;
  po?: PoWhereUniqueInput;
};
