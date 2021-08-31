import React from "react";
import merge from "lodash/merge";
import PropTypes from "prop-types";

import defaultStyles, { TextFactory } from "./styles";

const Text = ({ styles, payload }) => {
  const finalStyles = merge(defaultStyles, styles);
  const TextComponent = TextFactory(finalStyles);

  return <TextComponent>{payload}</TextComponent>;
};

Text.defaultProps = {
  styles: {},
  payload: "",
};

Text.propTypes = {
  styles: PropTypes.objectOf(PropTypes.object),
  payload: PropTypes.string,
};

export default Text;
