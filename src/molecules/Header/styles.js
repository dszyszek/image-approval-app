import styled from "styled-components";
import { Box } from "@material-ui/core";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  text: {},
};

export const HeaderWrapperFactory = (styles) => styled(Box)({ ...styles });

export default defaultStyles;
