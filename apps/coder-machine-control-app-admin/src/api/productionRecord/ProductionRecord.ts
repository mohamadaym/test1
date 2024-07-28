import { Sku } from "../sku/Sku";
import { Po } from "../po/Po";

export type ProductionRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productionDateTime: Date | null;
  expiryDate: Date | null;
  batchNumber: string | null;
  sku?: Sku | null;
  po?: Po | null;
};
