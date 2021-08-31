import React from "react";
import merge from "lodash/merge";
import PropTypes from "prop-types";

import defaultStyles, { TextFactory } from "./styles";

const Text = ({ styles, children }) => {
  const finalStyles = merge(defaultStyles, styles);
  const TextComponent = TextFactory(finalStyles);

  return <TextComponent>{children}</TextComponent>;
};

Text.defaultProps = {
  styles: {},
  children: "",
};

Text.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.string,
};

export default Text;
