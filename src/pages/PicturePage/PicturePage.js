import React from "react";

import { API } from "../../services";
import { UNSPLASH_BASE } from "../../constants";

export default () => {
  const api = new API(UNSPLASH_BASE);
  return <h1>Picture page</h1>;
};
