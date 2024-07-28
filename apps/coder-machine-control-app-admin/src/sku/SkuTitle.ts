import { Sku as TSku } from "../api/sku/Sku";

export const SKU_TITLE_FIELD = "name";

export const SkuTitle = (record: TSku): string => {
  return record.name?.toString() || String(record.id);
};
