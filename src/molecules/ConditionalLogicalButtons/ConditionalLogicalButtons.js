import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";

const ConditionalLogicalButtons = ({
  styles,
  condition,
  onApprove,
  onReject,
  isFalseMessage,
}) => {
  const { wrapper: wrapperStyles, text: textStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);

  return (
    <Wrapper>
      <div>ConditionalLogicalButtons</div>
    </Wrapper>
  );
};

ConditionalLogicalButtons.defaultProps = {
  styles: {},
  condition: false,
  onApprove: () => {},
  onReject: () => {},
  isFalseMessage: "",
};

ConditionalLogicalButtons.propTypes = {
  styles: PropTypes.shape({}),
  condition: PropTypes.bool,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
  isFalseMessage: PropTypes.string,
};

export default ConditionalLogicalButtons;
