import { PoWhereInput } from "./PoWhereInput";
import { PoOrderByInput } from "./PoOrderByInput";

export type PoFindManyArgs = {
  where?: PoWhereInput;
  orderBy?: Array<PoOrderByInput>;
  skip?: number;
  take?: number;
};
