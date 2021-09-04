import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { pages } from "../pages";
import { routesFactory } from "./utils";
import { store } from "../redux";

const { PicturePage, NotFoundPage } = pages;

const routesConfig = [
  { path: "/", component: PicturePage, exact: true, key: 1 },
  { component: NotFoundPage, key: 2 },
];

const routes = routesFactory(routesConfig);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
  </Provider>
);
