import styled from "styled-components";

const defaultStyles = {
  fontSize: "10px",
  color: "black",
};

export const TextFactory = (styles) =>
  styled.span({
    ...styles,
  });

export default defaultStyles;
