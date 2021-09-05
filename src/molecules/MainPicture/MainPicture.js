import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";
import { Image, Clickable } from "../../atoms";

const MainPicture = ({ styles, picture, onClick }) => {
  const { wrapper: wrapperStyles, image: imageStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);
  const finalOnClick = onClick || noop;

  const { url, alt } = picture;

  const image = url ? (
    <Image src={url} alt={alt} styles={imageStyles} />
  ) : (
    <Image
      alt="plus sign"
      styles={{
        wrapper: { ...imageStyles.wrapper, width: "30%", border: "unset" },
      }}
    />
  );

  return (
    <Wrapper>
      <Clickable
        styles={{
          ...imageStyles.wrapper,
          cursor: onClick ? "pointer" : "unset",
        }}
        onClick={finalOnClick}
      >
        {image}
      </Clickable>
    </Wrapper>
  );
};

MainPicture.defaultProps = {
  styles: {
    wrapper: {},
    image: {},
  },
  picture: {},
  onClick: undefined,
};
MainPicture.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    image: PropTypes.objectOf(PropTypes.string),
  }),
  picture: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default MainPicture;
