import { css } from "styled-components";

export const colors = {
  greyLight: "#efeef5",
  greyDark: "#15151e",
  blue: "#672ee3",
  red: "#fc5555",
  greenLight: "#D9F99D",
  buttonPrimary: "#672ee3",
  buttonClose: "#FECDD3",
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
