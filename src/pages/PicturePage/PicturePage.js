import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnsplashAPI } from "../../services";
import { PictureTemplate } from "../../templates";
import { getApprovablePhoto } from "../../utils";
import {
  approvePicture,
  rejectPicture,
  changeMainPicture,
  setActionButtonsVisibility,
  setMainPictureClickable,
} from "./actions";
import {
  PICTURE_PAGE_NAME,
  BUTTON_IS_FALSE_MESSAGE,
  HEADER_TEXT,
} from "./constants";

export default () => {
  const api = new UnsplashAPI();
  const dispatch = useDispatch();

  // selectors
  const approvedPicturesSelector = useSelector(
    (state) => state[PICTURE_PAGE_NAME].approved,
  );
  const rejectedPicturesSelector = useSelector(
    (state) => state[PICTURE_PAGE_NAME].rejected,
  );
  const mainPicturesSelector = useSelector(
    (state) => state[PICTURE_PAGE_NAME].mainPicture,
  );
  const actionButtonsVisibleSelector = useSelector(
    (state) => state[PICTURE_PAGE_NAME].actionButtonsVisible,
  );
  const mainPictureClickableSelector = useSelector(
    (state) => state[PICTURE_PAGE_NAME].mainPictureClickable,
  );
  const thumbnailGalleryLabel = `approved images (${approvedPicturesSelector.length})`;

  // local variables
  const rejectedIDs = rejectedPicturesSelector.map((pic) => pic.id);
  const approvedIDs = approvedPicturesSelector.map((pic) => pic.id);
  const excludedIDs = [...rejectedIDs, ...approvedIDs];

  // component's props
  const data = {
    headerText: HEADER_TEXT,
    carouselImages: approvedPicturesSelector.map((image) => ({
      url: image.thumb,
      alt: image.alt,
    })),
    mainPicture: {
      url: mainPicturesSelector.small,
      alt: mainPicturesSelector.alt,
    },
    thumbnailGalleryLabel,
    buttonsIsFalseMessage: BUTTON_IS_FALSE_MESSAGE,
  };
  const control = {
    onMainPictureClick: mainPictureClickableSelector
      ? async () => {
          dispatch(setActionButtonsVisibility(true));
          dispatch(setMainPictureClickable(false));
          const relevantPhotoInfo = await getApprovablePhoto(api, excludedIDs);
          dispatch(changeMainPicture(relevantPhotoInfo));
        }
      : undefined,
    buttonsOnReject: async () => {
      dispatch(rejectPicture(mainPicturesSelector));
      const relevantPhotoInfo = await getApprovablePhoto(api, excludedIDs);
      dispatch(changeMainPicture(relevantPhotoInfo));
    },
    buttonsOnApprove: async () => {
      dispatch(approvePicture(mainPicturesSelector));
      const relevantPhotoInfo = await getApprovablePhoto(api, excludedIDs);
      dispatch(changeMainPicture(relevantPhotoInfo));
    },
    buttonsCondition: actionButtonsVisibleSelector,
  };

  return <PictureTemplate control={control} data={data} />;
};
