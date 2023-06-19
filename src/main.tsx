import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/store/store";
import { I18nProvider } from "@/libs/i18n";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
        ;
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
