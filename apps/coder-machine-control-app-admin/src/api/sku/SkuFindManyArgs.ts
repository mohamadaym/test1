import { SkuWhereInput } from "./SkuWhereInput";
import { SkuOrderByInput } from "./SkuOrderByInput";

export type SkuFindManyArgs = {
  where?: SkuWhereInput;
  orderBy?: Array<SkuOrderByInput>;
  skip?: number;
  take?: number;
};
