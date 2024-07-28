import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SKU_TITLE_FIELD } from "../sku/SkuTitle";
import { PO_TITLE_FIELD } from "./PoTitle";

export const PoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="number" source="numberField" />
        <ReferenceField label="sku" source="sku.id" reference="Sku">
          <TextField source={SKU_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ProductionRecord"
          target="poId"
          label="ProductionRecords"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
