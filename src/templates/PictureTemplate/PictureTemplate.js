import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import defaultThemeConfig, {
  MainBox,
  PictureTemplateWrapper,
  headerStyles,
} from "./styles";
import { Header } from "../../molecules";

const PictureTemplate = ({ themeConfig, data }) => {
  const theme = createTheme(themeConfig);
  return (
    <ThemeProvider theme={theme}>
      <MainBox xs={12}>
        <PictureTemplateWrapper>
          <Header
            styles={headerStyles}
            headerText="IMAGE APPROVAL APPLICATION"
          />
        </PictureTemplateWrapper>
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
