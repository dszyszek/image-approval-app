import React from "react";

import { API } from "../../services";
import { UNSPLASH_BASE } from "../../constants";
import { PictureTemplate } from "../../templates";

const placeholderImages = [
  [
    "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    "placeholder1",
  ],
  [
    "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    "placeholder2",
  ],
  [
    "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    "placeholder3",
  ],
  [
    "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    "placeholder4",
  ],
  [
    "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    "placeholder5",
  ],
];

const placeholderMainImage = {
  src: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  alt: "placeholder1",
};

const placeholderThumbnailGalleryLabel = "approved images (0)";
const placeholderHeaderText = "image approval application";

const onMainPictureClickPlaceholder = () =>
  console.log("onMainPictureClick placeholder");

export default () => {
  const api = new API(UNSPLASH_BASE);
  const data = {
    headerText: placeholderHeaderText,
    carouselImages: placeholderImages,
    mainPicture: placeholderMainImage,
    thumbnailGalleryLabel: placeholderThumbnailGalleryLabel,
  };
  const control = {
    onMainPictureClick: onMainPictureClickPlaceholder,
  };

  return <PictureTemplate control={control} data={data} />;
};
