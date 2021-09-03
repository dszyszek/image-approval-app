import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge } from "../../utils";
import { DEFAULT_ALT } from "./constants";
import defaultPicture from "./static/default.svg";

const Image = ({ src, alt, styles, draggable }) => {
  const { wrapper: wrapperStyles, img: imgStyles } = merge(
    defaultStyles,
    styles,
  );
  const finalSrc = src.length ? src : defaultPicture;
  const finalDraggable = !!draggable;

  return (
    <div style={wrapperStyles} draggable={finalDraggable}>
      <img
        src={finalSrc}
        style={imgStyles}
        alt={alt}
        draggable={finalDraggable}
      />
    </div>
  );
};

Image.defaultProps = {
  styles: {},
  src: "",
  alt: DEFAULT_ALT,
  draggable: false,
};
Image.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  src: PropTypes.string,
  alt: PropTypes.string,
  draggable: PropTypes.bool,
};

export default Image;
