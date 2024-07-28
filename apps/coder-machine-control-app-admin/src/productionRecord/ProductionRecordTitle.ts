import { ProductionRecord as TProductionRecord } from "../api/productionRecord/ProductionRecord";

export const PRODUCTIONRECORD_TITLE_FIELD = "batchNumber";

export const ProductionRecordTitle = (record: TProductionRecord): string => {
  return record.batchNumber?.toString() || String(record.id);
};
