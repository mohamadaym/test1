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

export const PoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"POS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="number" source="numberField" />
        <ReferenceField label="sku" source="sku.id" reference="Sku">
          <TextField source={SKU_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
