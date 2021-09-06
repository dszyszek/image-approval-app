/* eslint no-await-in-loop: 0 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UnsplashAPI } from "../../services";
import { unsplashApiReduxActionsFactory } from "../../redux/actions";
import { PictureTemplate } from "../../templates";
import { extractRelevantFromUnsplashRespone } from "../../utils";
import { approvePicture, rejectPicture } from "./actions";
import {
  PICTURE_PAGE_NAME,
  BUTTON_IS_FALSE_MESSAGE,
  HEADER_TEXT,
} from "./constants";

export default () => {
  // control
  const api = new UnsplashAPI();
  const unsplashApiActions = unsplashApiReduxActionsFactory(api);
  const dispatch = useDispatch();
  const approvedPictures = useSelector(
    (state) => state[PICTURE_PAGE_NAME].approved,
  );
  const rejectedPictures = useSelector(
    (state) => state[PICTURE_PAGE_NAME].rejected,
  );
  const thumbnailGalleryLabel = `approved images (${approvedPictures.length})`;

  // local state
  const [buttonsCondition, setButtonsCondition] = useState(false);
  const [shouldMainPictureBeClickable, setShouldMainPictureBeClickable] =
    useState(true);
  const [mainPicture, setMainPicture] = useState({});
  const [currentPictureResponse, setCurrentPictureResponse] = useState({});

  // local functions
  const pictureSetCommonSideEffects = async () => {
    const rejectedIDs = rejectedPictures.map((pic) => pic.id);

    let isRejectable = true;
    let response;
    while (isRejectable) {
      response = await api.getRandomPhoto();
      isRejectable = rejectedIDs.includes(response.response.id);
    }
    setCurrentPictureResponse(response.response);

    dispatch(unsplashApiActions.getRandomPhoto(undefined, response));
    const relevantInfo = extractRelevantFromUnsplashRespone(response.response);
    setMainPicture({
      url: relevantInfo.small,
      alt: relevantInfo.alt,
    });
  };

  const data = {
    headerText: HEADER_TEXT,
    carouselImages: approvedPictures.map((image) => ({
      url: image.thumb,
      alt: image.alt,
    })),
    mainPicture: mainPicture,
    thumbnailGalleryLabel,
    buttonsIsFalseMessage: BUTTON_IS_FALSE_MESSAGE,
  };
  const control = {
    onMainPictureClick: shouldMainPictureBeClickable
      ? () => {
          setButtonsCondition(true);
          setShouldMainPictureBeClickable(false);
          pictureSetCommonSideEffects();
        }
      : undefined,
    buttonsOnReject: () => {
      const relevantInfo = extractRelevantFromUnsplashRespone(
        currentPictureResponse,
      );
      dispatch(rejectPicture(relevantInfo));
      pictureSetCommonSideEffects();
    },
    buttonsOnApprove: () => {
      const relevantInfo = extractRelevantFromUnsplashRespone(
        currentPictureResponse,
      );
      dispatch(approvePicture(relevantInfo));
      pictureSetCommonSideEffects();
    },
    buttonsCondition: buttonsCondition,
  };

  return <PictureTemplate control={control} data={data} />;
};
