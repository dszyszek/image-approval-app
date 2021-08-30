import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { PicturePage, NotFound } from "../pages";
import { routesFactory } from "./utils";

const routesConfig = [
  { path: "/", component: PicturePage, exact: true, key: 1 },
  { component: NotFound, key: 2 },
];

const routes = routesFactory(routesConfig);

export default () => (
  <BrowserRouter>
    <Switch>{routes}</Switch>
  </BrowserRouter>
);
