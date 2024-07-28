import { UserInput as TUserInput } from "../api/userInput/UserInput";

export const USERINPUT_TITLE_FIELD = "poNumber";

export const UserInputTitle = (record: TUserInput): string => {
  return record.poNumber?.toString() || String(record.id);
};
