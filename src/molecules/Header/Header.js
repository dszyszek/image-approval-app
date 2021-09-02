import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { Text } from "../../atoms";
import { merge, wrapperFactory } from "../../utils";

const Header = ({ styles, headerText }) => {
  const { wrapper: wrapperStyles, text: textStyles } = merge(
    defaultStyles,
    styles,
  );
  const HeaderWrapper = wrapperFactory(wrapperStyles);

  return (
    <HeaderWrapper>
      <Text styles={textStyles}>{headerText}</Text>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  styles: {},
  headerText: "",
};

Header.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    text: PropTypes.objectOf(PropTypes.string),
  }),
  headerText: PropTypes.string,
};

export default Header;
