import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";
import { Button, Text } from "../../atoms";
import { DEFAULT_ON_APPROVE_LABEL, DEFAULT_ON_REJECT_LABEL } from "./constants";

const ConditionalLogicalButtons = ({
  styles,
  condition,
  onApprove,
  onReject,
  isFalseMessage,
  buttonOnApproveLabel,
  buttonOnRejectLabel,
}) => {
  const {
    wrapper: wrapperStyles,
    buttonsWrapper: buttonsWrapperStyles,
    messageWrapper: messageWrapperStyles,
    button: buttonStyles,
    text: textStyles,
  } = merge(defaultStyles, styles);

  const MainWrapper = wrapperFactory(wrapperStyles);
  const ButtonsWrapper = wrapperFactory(buttonsWrapperStyles);
  const MessageWrapper = wrapperFactory(messageWrapperStyles);
  const finalOnApproveButtonLabel =
    buttonOnApproveLabel || DEFAULT_ON_APPROVE_LABEL;
  const finalOnRejectButtonLabel =
    buttonOnRejectLabel || DEFAULT_ON_REJECT_LABEL;

  const content = condition ? (
    <ButtonsWrapper>
      <Button onClick={onReject} styles={buttonStyles.reject}>
        {finalOnRejectButtonLabel}
      </Button>
      <Button onClick={onApprove} styles={buttonStyles.approve}>
        {finalOnApproveButtonLabel}
      </Button>
    </ButtonsWrapper>
  ) : (
    <MessageWrapper>
      <Text styles={textStyles}>{isFalseMessage}</Text>
    </MessageWrapper>
  );

  return <MainWrapper>{content}</MainWrapper>;
};

ConditionalLogicalButtons.defaultProps = {
  styles: {
    wrapper: {},
    buttonsWrapper: {},
    messageWrapper: {},
    button: {},
    text: {},
  },
  condition: false,
  onApprove: noop,
  onReject: noop,
  isFalseMessage: "",
  buttonOnApproveLabel: "",
  buttonOnRejectLabel: "",
};

ConditionalLogicalButtons.propTypes = {
  styles: PropTypes.shape({}),
  condition: PropTypes.bool,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
  isFalseMessage: PropTypes.string,
  buttonOnApproveLabel: PropTypes.string,
  buttonOnRejectLabel: PropTypes.string,
};

export default ConditionalLogicalButtons;
