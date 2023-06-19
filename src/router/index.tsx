import React from "react";
import { RouteObject } from "react-router-dom";

const HomePage = React.lazy(() => import("@/pages/home/Home"));



export const APP_ROUTES: RouteObject_[] = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
    label: "Home",
    isPageFullWidth: true,
    hasFooter: true,
  },


];

export type RouteObject_ = RouteObject & {
  isPageFullWidth?: boolean;
  label?: string;
  path: string;
  isAuthPage?: boolean;
  hasFooter?: boolean;
};
