import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { ButtonFactory } from "./styles";
import { merge } from "../../utils";

const Button = ({ styles, text, onClick }) => {
  const finalStyles = merge(defaultStyles, styles);
  const ButtonComponent = ButtonFactory(finalStyles);

  return (
    <ButtonComponent type="button" onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  styles: {},
  text: "",
  onClick: undefined,
};

Button.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
