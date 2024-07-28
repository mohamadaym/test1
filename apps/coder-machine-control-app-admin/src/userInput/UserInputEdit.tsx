import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserInputEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="poNumber" source="poNumber" />
        <TextInput label="runningSKU" source="runningSku" />
      </SimpleForm>
    </Edit>
  );
};
