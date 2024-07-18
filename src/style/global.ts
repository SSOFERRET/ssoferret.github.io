import { createGlobalStyle } from "styled-components";
import { getTheme } from "./theme";
import neodgmTtf from "../assets/fonts/neodgm.ttf";
import neodgmWoff from "../assets/fonts/neodgm.woff";
import neodgmWoff2 from "../assets/fonts/neodgm.woff2";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${getTheme().color.secondary};

        font-family: 'NeoDunggeunmo', sans-serif;
    }

    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
    }

@font-face {
    font-family: 'NeoDunggeunmo';
        src: url(${neodgmWoff2}) format('woff2'),
             url(${neodgmWoff}) format('woff'),
             url(${neodgmTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
  }
`;
