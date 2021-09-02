import React from "react";

import { API } from "../../services";
import { UNSPLASH_BASE } from "../../constants";
import { PictureTemplate } from "../../templates";

const placeholderImages = [
  // [
  //   "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   "placeholder1",
  // ],
  // [
  //   "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   "placeholder2",
  // ],
  // [
  //   "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   "placeholder3",
  // ],
  // [
  //   "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   "placeholder4",
  // ],
  // [
  //   "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   "placeholder5",
  // ],
];

export default () => {
  const api = new API(UNSPLASH_BASE);
  const data = { headerText: "some text", carouselImages: placeholderImages };

  return <PictureTemplate data={data} />;
};
