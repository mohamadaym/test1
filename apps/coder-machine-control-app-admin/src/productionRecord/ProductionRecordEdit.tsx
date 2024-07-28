import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SkuTitle } from "../sku/SkuTitle";
import { PoTitle } from "../po/PoTitle";

export const ProductionRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
