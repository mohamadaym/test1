import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="poNumber" source="poNumber" />
        <TextInput label="runningSKU" source="runningSku" />
      </SimpleForm>
    </Create>
  );
};
