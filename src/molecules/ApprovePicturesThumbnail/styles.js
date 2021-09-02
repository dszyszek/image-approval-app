import styled from "styled-components";
import { Box } from "@material-ui/core";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "30%",
  },
  text: {},
  picturesCarousel: {},
  picturesCarouselWrapper: {},
};

export const defaultImageStyles = {
  wrapper: {
    width: "30%",
    height: "90%",
    backgroundColor: "#e6eaf0",
    borderRadius: "5px",
    border: "1px solid #d5d9e0",
  },
  img: { width: "50%", height: "50%", fill: "#d5d9e0" },
};

export const wrapperFactory = (styles) =>
  styled(Box)({
    ...styles,
  });

export default defaultStyles;
