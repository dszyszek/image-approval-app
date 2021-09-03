const defaultStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "unset",
};

export const restrictedStyles = {
  userSelect: "none",
  userDrag: "none",
};

export const stylesTemplate = (styles) => ({
  ...defaultStyles,
  ...styles,
  ...restrictedStyles,
});

export default defaultStyles;
