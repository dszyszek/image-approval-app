import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { wrapperFactory, defaultImageStyles } from "./styles";
import { Text, Image } from "../../atoms";
import { PicturesCarousel } from "..";
import { merge } from "../../utils";

const ApprovePicturesThumbnail = ({
  styles,
  approvedPicturesTitle,
  images,
}) => {
  const {
    wrapper: wrapperStyles,
    text: { wrapper: textWrapperStyles, text: textStyles },
    picturesCarousel: picturesCarouselStyles,
    picturesCarouselWrapper: picturesCarouselWrapperStyles,
  } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);
  const CarouselWrapper = wrapperFactory(picturesCarouselWrapperStyles);
  const TextWrapper = wrapperFactory(textWrapperStyles);
  const carousel = images.length ? (
    <PicturesCarousel styles={picturesCarouselStyles} items={images} />
  ) : (
    <Image styles={defaultImageStyles} />
  );

  return (
    <Wrapper>
      <TextWrapper>
        <Text styles={textStyles}>{approvedPicturesTitle}</Text>
      </TextWrapper>
      <CarouselWrapper>{carousel}</CarouselWrapper>
    </Wrapper>
  );
};

ApprovePicturesThumbnail.defaultProps = {
  styles: {},
  approvedPicturesTitle: "",
  images: [],
};
ApprovePicturesThumbnail.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.any),
    text: PropTypes.objectOf(PropTypes.any),
    picturesCarousel: PropTypes.objectOf(PropTypes.string),
    picturesCarouselWrapper: PropTypes.objectOf(PropTypes.string),
  }),
  approvedPicturesTitle: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default ApprovePicturesThumbnail;
