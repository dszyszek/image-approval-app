/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Route } from "react-router-dom";

export const routesFactory = (configArr) =>
  configArr.map((config) => (
    <Route key={config.key || config.path} {...config} />
  ));
