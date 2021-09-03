const buttonCommonStyles = {
  width: "48%!important",
  borderRadius: "30px!important",
};

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  buttonsWrapper: {},
  button: {
    approve: {
      ...buttonCommonStyles,
      backgroundColor: "red!important",
    },
    reject: {
      ...buttonCommonStyles,
      backgroundColor: "green!important",
    },
  },
  messageWrapper: {},
};

export default defaultStyles;
