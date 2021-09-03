import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import {
  LabeledThumbnailSlider,
  MainPicture,
  ConditionalLogicalButtons,
} from "../../molecules";
import { toUpperCase, merge, wrapperFactory } from "../../utils";
import { DEFAULT_TITLE } from "./constants";

const ApprovePictures = ({
  styles,
  title,
  carouselImages,
  mainPicture,
  onMainPictureClick,
  buttonsCondition,
  buttonsOnApprove,
  buttonsOnReject,
  buttonsIsFalseMessage,
  buttonOnApproveLabel,
  buttonOnRejectLabel,
}) => {
  const {
    wrapper: wrapperStyles,
    carousel: carouselStyles,
    mainPicture: mainPictureStyles,
    conditionalLogicalButtons: conditionalLogicalButtonsStyles,
  } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);

  const approvedPicturesTitle = toUpperCase(title);

  return (
    <Wrapper>
      <LabeledThumbnailSlider
        styles={carouselStyles}
        approvedPicturesTitle={approvedPicturesTitle}
        images={carouselImages}
      />
      <MainPicture
        onClick={onMainPictureClick}
        picture={mainPicture}
        styles={mainPictureStyles}
      />
      <ConditionalLogicalButtons
        styles={conditionalLogicalButtonsStyles}
        condition={buttonsCondition}
        onApprove={buttonsOnApprove}
        onReject={buttonsOnReject}
        isFalseMessage={buttonsIsFalseMessage}
        buttonOnApproveLabel={buttonOnApproveLabel}
        buttonOnRejectLabel={buttonOnRejectLabel}
      />
    </Wrapper>
  );
};

ApprovePictures.defaultProps = {
  styles: {
    wrapper: {},
    carousel: {},
    mainPicture: {},
    conditionalLogicalButtons: {},
  },
  title: DEFAULT_TITLE,
  carouselImages: [],
  mainPicture: {},
  onMainPictureClick: undefined,
  buttonsCondition: false,
  buttonsOnApprove: undefined,
  buttonsOnReject: undefined,
  buttonsIsFalseMessage: undefined,
  buttonOnApproveLabel: undefined,
  buttonOnRejectLabel: undefined,
};
ApprovePictures.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    carouselStyles: PropTypes.objectOf(PropTypes.string),
    mainPicture: PropTypes.objectOf(PropTypes.string),
    conditionalLogicalButtons: PropTypes.objectOf(PropTypes.string),
  }),
  title: PropTypes.string,
  carouselImages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  mainPicture: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  onMainPictureClick: PropTypes.func,
  buttonsCondition: PropTypes.bool,
  buttonsOnApprove: PropTypes.func,
  buttonsOnReject: PropTypes.func,
  buttonsIsFalseMessage: PropTypes.string,
  buttonOnApproveLabel: PropTypes.string,
  buttonOnRejectLabel: PropTypes.string,
};
export default ApprovePictures;
