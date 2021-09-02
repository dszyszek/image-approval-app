const defaultStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const restrictedStyles = {
  border: "unset",
  cursor: "pointer",
  userSelect: "none",
  userDrag: "none",
};

export const stylesTemplate = (styles) => ({
  ...defaultStyles,
  ...styles,
  ...restrictedStyles,
});

export default defaultStyles;
