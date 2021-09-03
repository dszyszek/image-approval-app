import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { buttonFactory } from "./styles";
import { merge } from "../../utils";

const Button = ({ styles, children, onClick }) => {
  const finalStyles = merge(defaultStyles, styles);
  const ButtonComponent = buttonFactory(finalStyles);

  return (
    <ButtonComponent type="button" onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  styles: {},
  children: [],
  onClick: undefined,
};

Button.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.objectOf(PropTypes.array),
  onClick: PropTypes.func,
};

export default Button;
