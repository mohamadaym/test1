import { PoCreateNestedManyWithoutSkusInput } from "./PoCreateNestedManyWithoutSkusInput";
import { ProductionRecordCreateNestedManyWithoutSkusInput } from "./ProductionRecordCreateNestedManyWithoutSkusInput";

export type SkuCreateInput = {
  shelfLife?: number | null;
  name?: string | null;
  pos?: PoCreateNestedManyWithoutSkusInput;
  productionRecords?: ProductionRecordCreateNestedManyWithoutSkusInput;
};
