import { useEffect, useState } from "react";

import "./App.css";
import { I18nProvider } from "@/libs/i18n";
import { i18n } from "@lingui/core";
import { useRoutes } from "react-router-dom";
import { APP_ROUTES } from "./router";
import { StoreProvider } from "@/store/store";
import { useLingui } from "@lingui/react";
function App() {
  useLingui();

  const element = useRoutes(APP_ROUTES);

  return <div>{element}</div>;
}

export default App;
