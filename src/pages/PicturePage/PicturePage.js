import React from "react";

import { API } from "../../services";
import { UNSPLASH_BASE } from "../../constants";
import { PictureTemplate } from "../../templates";

export default () => {
  const api = new API(UNSPLASH_BASE);
  return <PictureTemplate />;
};
