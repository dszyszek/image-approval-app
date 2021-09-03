import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { TextFactory } from "./styles";
import { merge } from "../../utils";

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
