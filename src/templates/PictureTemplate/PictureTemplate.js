import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import merge from "lodash/merge";

import defaultThemeConfig, {
  MainBox,
  PictureTemplateWrapper,
  headerStylesFactory,
} from "./styles";
import { Header } from "../../molecules";
import { toUpperCase } from "../../utils";
import { ApprovePictures } from "../../organisms";

const PictureTemplate = ({ themeConfig, data: { headerText } }) => {
  const finalTheme = merge(defaultThemeConfig, themeConfig);

  const theme = createTheme(finalTheme);
  const headerStyles = headerStylesFactory(theme);

  const finalHeaderText = headerText || "Template placeholder text";
  const finalHeaderTextTransformed = toUpperCase(finalHeaderText);

  return (
    <ThemeProvider theme={theme}>
      <MainBox xs={12}>
        <PictureTemplateWrapper>
          <Header
            styles={headerStyles}
            headerText={finalHeaderTextTransformed}
          />
          <ApprovePictures />
        </PictureTemplateWrapper>
      </MainBox>
    </ThemeProvider>
  );
};

PictureTemplate.defaultProps = {
  themeConfig: {},
  data: {},
};

PictureTemplate.propTypes = {
  themeConfig: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.objectOf(PropTypes.object),
};

export default PictureTemplate;
