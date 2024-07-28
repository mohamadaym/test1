import { PoWhereUniqueInput } from "./PoWhereUniqueInput";
import { PoUpdateInput } from "./PoUpdateInput";

export type UpdatePoArgs = {
  where: PoWhereUniqueInput;
  data: PoUpdateInput;
};
