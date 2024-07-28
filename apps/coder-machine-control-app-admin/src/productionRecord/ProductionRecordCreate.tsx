import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SkuTitle } from "../sku/SkuTitle";
import { PoTitle } from "../po/PoTitle";

export const ProductionRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="productionDateTime" source="productionDateTime" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="batchNumber" source="batchNumber" />
        <ReferenceInput source="sku.id" reference="Sku" label="sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
        <ReferenceInput source="po.id" reference="Po" label="po">
          <SelectInput optionText={PoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
