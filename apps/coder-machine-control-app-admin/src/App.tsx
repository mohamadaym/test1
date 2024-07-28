import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SkuList } from "./sku/SkuList";
import { SkuCreate } from "./sku/SkuCreate";
import { SkuEdit } from "./sku/SkuEdit";
import { SkuShow } from "./sku/SkuShow";
import { UserInputList } from "./userInput/UserInputList";
import { UserInputCreate } from "./userInput/UserInputCreate";
import { UserInputEdit } from "./userInput/UserInputEdit";
import { UserInputShow } from "./userInput/UserInputShow";
import { PoList } from "./po/PoList";
import { PoCreate } from "./po/PoCreate";
import { PoEdit } from "./po/PoEdit";
import { PoShow } from "./po/PoShow";
import { ProductionRecordList } from "./productionRecord/ProductionRecordList";
import { ProductionRecordCreate } from "./productionRecord/ProductionRecordCreate";
import { ProductionRecordEdit } from "./productionRecord/ProductionRecordEdit";
import { ProductionRecordShow } from "./productionRecord/ProductionRecordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CoderMachineControlApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sku"
          list={SkuList}
          edit={SkuEdit}
          create={SkuCreate}
          show={SkuShow}
        />
        <Resource
          name="UserInput"
          list={UserInputList}
          edit={UserInputEdit}
          create={UserInputCreate}
          show={UserInputShow}
        />
        <Resource
          name="Po"
          list={PoList}
          edit={PoEdit}
          create={PoCreate}
          show={PoShow}
        />
        <Resource
          name="ProductionRecord"
          list={ProductionRecordList}
          edit={ProductionRecordEdit}
          create={ProductionRecordCreate}
          show={ProductionRecordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
