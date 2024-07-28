import { Po as TPo } from "../api/po/Po";

export const PO_TITLE_FIELD = "numberField";

export const PoTitle = (record: TPo): string => {
  return record.numberField?.toString() || String(record.id);
};
