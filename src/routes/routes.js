import { lazy } from "react";

const Layout = lazy(() =>
  import(/* webpackChunkName: "LazyLayout" */ "../pages/layout/Layout")
);

export const routes = [
  {
    path: "app",
    to: "/app",
    Component: Layout,
    name: "Layout Component",
  },
];
