import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SKU_TITLE_FIELD } from "../sku/SkuTitle";
import { PO_TITLE_FIELD } from "../po/PoTitle";

export const ProductionRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductionRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="productionDateTime" source="productionDateTime" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="batchNumber" source="batchNumber" />
        <ReferenceField label="sku" source="sku.id" reference="Sku">
          <TextField source={SKU_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="po" source="po.id" reference="Po">
          <TextField source={PO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
