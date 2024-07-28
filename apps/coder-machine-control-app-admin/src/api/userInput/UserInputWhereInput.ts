import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserInputWhereInput = {
  id?: StringFilter;
  poNumber?: StringNullableFilter;
  runningSku?: StringNullableFilter;
};
