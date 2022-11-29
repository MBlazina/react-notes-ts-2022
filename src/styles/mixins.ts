import { css } from "styled-components";

export const colors = {
  greyLight: "#efeef5", //app background
  greyDark: "#15151e",
  blue: "#672ee3",
  buttonPrimary: "#672ee3", //button primary color
};

export const sizes = {
  desktopContentWidth: "1140px",
};

export const mixins = {
  contentWide: css`
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 80px);
    width: ${sizes.desktopContentWidth};
  `,
};
