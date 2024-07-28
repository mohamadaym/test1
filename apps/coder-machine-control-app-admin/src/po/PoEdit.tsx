import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkuTitle } from "../sku/SkuTitle";
import { ProductionRecordTitle } from "../productionRecord/ProductionRecordTitle";

export const PoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="number" source="numberField" />
        <ReferenceInput source="sku.id" reference="Sku" label="sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productionRecords"
          reference="ProductionRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
