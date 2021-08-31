import styled from "styled-components";

const defaultStyles = {
  fontSize: "10px",
  color: "white",
};

export const TextFactory = (styles) => styled.span`
    font-size: ${styles.fontSize},
    color: ${styles.color}
`;

export default defaultStyles;
