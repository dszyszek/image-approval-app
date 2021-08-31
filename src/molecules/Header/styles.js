import styled from "styled-components";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  text: {},
};

export const HeaderWrapperFactory = (styles) => styled.div({ ...styles });

export default defaultStyles;
