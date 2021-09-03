import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultThemeConfig, {
  MainBox,
  PictureTemplateWrapper,
  headerStylesFactory,
  approvePicturesStylesFactory,
} from "./styles";
import { Header } from "../../molecules";
import { toUpperCase, merge } from "../../utils";
import { ApprovePictures } from "../../organisms";
import {
  DEFAULT_HEADER_TEXT,
  DEFAULT_THUMBNAIL_GALLERY_TITLE,
} from "./constants";

const PictureTemplate = ({
  themeConfig,
  data: {
    headerText,
    carouselImages,
    mainPicture,
    thumbnailGalleryLabel,
    buttonsIsFalseMessage,
  },
  control: {
    onMainPictureClick,
    buttonsOnReject,
    buttonsOnApprove,
    buttonsCondition,
  },
}) => {
  const finalTheme = merge(defaultThemeConfig, themeConfig);

  const theme = createTheme(finalTheme);
  const headerStyles = headerStylesFactory(theme);
  const approvePicturesStyles = approvePicturesStylesFactory(theme);

  const finalHeaderText = headerText || DEFAULT_HEADER_TEXT;
  const finalheaderTextTransformed = toUpperCase(finalHeaderText);

  const finalThumbnailGalleryLabel =
    thumbnailGalleryLabel || DEFAULT_THUMBNAIL_GALLERY_TITLE;
  const finalThumbnailGalleryLabelTransformed = toUpperCase(
    finalThumbnailGalleryLabel,
  );

  return (
    <ThemeProvider theme={theme}>
      <MainBox xs={12}>
        <PictureTemplateWrapper>
          <Header
            styles={headerStyles}
            headerText={finalheaderTextTransformed}
          />
          <ApprovePictures
            styles={approvePicturesStyles}
            title={finalThumbnailGalleryLabelTransformed}
            carouselImages={carouselImages}
            mainPicture={mainPicture}
            onMainPictureClick={onMainPictureClick}
            buttonsIsFalseMessage={buttonsIsFalseMessage}
            buttonsOnReject={buttonsOnReject}
            buttonsOnApprove={buttonsOnApprove}
            buttonsCondition={buttonsCondition}
          />
        </PictureTemplateWrapper>
      </MainBox>
    </ThemeProvider>
  );
};

PictureTemplate.defaultProps = {
  themeConfig: {},
  data: {
    headerText: DEFAULT_HEADER_TEXT,
    carouselImages: [],
    mainPicture: {},
    thumbnailGalleryLabel: DEFAULT_THUMBNAIL_GALLERY_TITLE,
    buttonsIsFalseMessage: "",
  },
  control: {
    onMainPictureClick: noop,
    buttonsOnApprove: undefined,
    buttonsOnReject: undefined,
    buttonsCondition: false,
  },
};

PictureTemplate.propTypes = {
  themeConfig: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.shape({
    carouselImages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    headerText: PropTypes.string,
    mainPicture: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    thumbnailGalleryLabel: PropTypes.string,
    buttonsIsFalseMessage: PropTypes.string,
  }),
  control: PropTypes.shape({
    onMainPictureClick: PropTypes.func,
    buttonsCondition: PropTypes.bool,
    buttonsOnApprove: PropTypes.func,
    buttonsOnReject: PropTypes.func,
  }),
};

export default PictureTemplate;
