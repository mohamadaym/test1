import { Po } from "../po/Po";
import { ProductionRecord } from "../productionRecord/ProductionRecord";

export type Sku = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  shelfLife: number | null;
  name: string | null;
  pos?: Array<Po>;
  productionRecords?: Array<ProductionRecord>;
};
