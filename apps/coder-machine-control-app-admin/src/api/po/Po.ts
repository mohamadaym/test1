import { Sku } from "../sku/Sku";
import { ProductionRecord } from "../productionRecord/ProductionRecord";

export type Po = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  numberField: string | null;
  sku?: Sku | null;
  productionRecords?: Array<ProductionRecord>;
};
