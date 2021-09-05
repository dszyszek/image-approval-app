import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UnsplashAPI } from "../../services";
import { unsplashApiReduxActionsFactory } from "../../redux/actions";
import { PictureTemplate } from "../../templates";
import { UNSPLASH_NAME } from "../../constants";
import { extractRelevantFromUnsplashRespone } from "../../utils";
import { approvePicture, rejectPicture } from "./actions";
import { PICTURE_PAGE_NAME } from "./constants";

const placeholderImages = [
  {
    url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    alt: "placeholder1",
  },
  {
    url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
    alt: "placeholder2",
  },
  // {
  //   url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   alt: "placeholder3",
  // },
  // {
  //   url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   alt: "placeholder4",
  // },
  // {
  //   url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  //   alt: "placeholder5",
  // },
];

const placeholderMainImage = {
  url: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max",
  alt: "placeholder1",
};

export default () => {
  // control
  const api = new UnsplashAPI();
  const unsplashApiActions = unsplashApiReduxActionsFactory(api);
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.api[UNSPLASH_NAME].pictures);
  const approvedPictures = useSelector(
    (state) => state[PICTURE_PAGE_NAME].approved,
  );
  const thumbnailGalleryLabel = `approved images (${approvedPictures.length})`;
  const buttonsIsFalseMessage =
    "Click on the + in order to get image recommendations";
  const headerText = "image approval application";

  // local state
  const [buttonsCondition, setButtonsCondition] = useState(false);
  const [shouldMainPictureBeClickable, setShouldMainPictureBeClickable] =
    useState(true);
  const [mainPicture, setMainPicture] = useState({});
  const [currentPictureRelevantInfo, setCurrentPictureRelevantInfo] = useState(
    {},
  );

  const data = {
    headerText,
    carouselImages: approvedPictures.map((image) => ({
      url: image.thumb,
      alt: image.alt,
    })),
    // carouselImages: placeholderImages,
    mainPicture: mainPicture,
    // mainPicture: placeholderMainImage,
    thumbnailGalleryLabel,
    buttonsIsFalseMessage,
  };
  const control = {
    onMainPictureClick: shouldMainPictureBeClickable
      ? async () => {
          setButtonsCondition(true);
          setShouldMainPictureBeClickable(false);
          const { response } = await api.getRandomPhoto();
          dispatch(unsplashApiActions.getRandomPhoto(response));
          const relevantInfo = extractRelevantFromUnsplashRespone(response);
          setCurrentPictureRelevantInfo(relevantInfo);
          setMainPicture({
            url: relevantInfo.small,
            alt: relevantInfo.alt,
          });
        }
      : undefined,
    buttonsOnReject: async () => {
      dispatch(rejectPicture(currentPictureRelevantInfo));

      const { response } = await api.getRandomPhoto();
      dispatch(unsplashApiActions.getRandomPhoto(response));
      const relevantInfo = extractRelevantFromUnsplashRespone(response);
      setCurrentPictureRelevantInfo(relevantInfo);
      setMainPicture({
        url: relevantInfo.small,
        alt: relevantInfo.alt,
      });
    },
    buttonsOnApprove: async () => {
      // Add additional logic to check if new picture is not already in `rejected` array
      dispatch(approvePicture(currentPictureRelevantInfo));

      const { response } = await api.getRandomPhoto();
      dispatch(unsplashApiActions.getRandomPhoto(response));
      const relevantInfo = extractRelevantFromUnsplashRespone(response);
      setCurrentPictureRelevantInfo(relevantInfo);
      setMainPicture({
        url: relevantInfo.small,
        alt: relevantInfo.alt,
      });
    },
    buttonsCondition: buttonsCondition,
  };

  return <PictureTemplate control={control} data={data} />;
};
