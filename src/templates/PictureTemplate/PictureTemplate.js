import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import defaultThemeConfig, { MainBox, PictureTemplateWrapper } from "./styles";

const PictureTemplate = ({ themeConfig, data }) => {
  const theme = createTheme(themeConfig);
  return (
    <ThemeProvider theme={theme}>
      <MainBox xs={12}>
        <PictureTemplateWrapper />
      </MainBox>
    </ThemeProvider>
  );
};

PictureTemplate.defaultProps = {
  themeConfig: defaultThemeConfig,
  data: {},
};

PictureTemplate.propTypes = {
  themeConfig: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.objectOf(PropTypes.object),
};

export default PictureTemplate;
