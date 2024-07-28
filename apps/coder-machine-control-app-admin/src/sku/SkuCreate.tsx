import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PoTitle } from "../po/PoTitle";
import { ProductionRecordTitle } from "../productionRecord/ProductionRecordTitle";

export const SkuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="shelfLife" source="shelfLife" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="pos"
          reference="Po"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productionRecords"
          reference="ProductionRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
