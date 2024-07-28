import { PoUpdateManyWithoutSkusInput } from "./PoUpdateManyWithoutSkusInput";
import { ProductionRecordUpdateManyWithoutSkusInput } from "./ProductionRecordUpdateManyWithoutSkusInput";

export type SkuUpdateInput = {
  shelfLife?: number | null;
  name?: string | null;
  pos?: PoUpdateManyWithoutSkusInput;
  productionRecords?: ProductionRecordUpdateManyWithoutSkusInput;
};
