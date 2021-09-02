import React from "react";
import { Redirect } from "react-router-dom";

import { BASE_ROUTE } from "../../constants";

export default () => <Redirect to={BASE_ROUTE} />;
