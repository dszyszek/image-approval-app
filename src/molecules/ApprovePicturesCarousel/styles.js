import styled from "styled-components";
import { Box } from "@material-ui/core";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "20%",
  },
  text: {},
  picturesCarousel: {},
};

export const wrapperFactory = (styles) =>
  styled(Box)({
    ...styles,
  });

export default defaultStyles;
