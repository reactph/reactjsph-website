import emotionReset from "emotion-reset"
import { css } from "@emotion/core"

export default css`
  ${emotionReset}

  /* Extend global styles after this line */

  @font-face {
    font-family: "Avenir";
    src: url("Avenir-Roman.eot");
    src: url("Avenir-Roman.eot?#iefix") format("embedded-opentype"),
      url("Avenir-Roman.woff2") format("woff2"),
      url("Avenir-Roman.woff") format("woff"),
      url("Avenir-Roman.ttf") format("truetype"),
      url("Avenir-Roman.svg#Avenir-Roman") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Avenir";
    src: url("Avenir-Black.eot");
    src: url("Avenir-Black.eot?#iefix") format("embedded-opentype"),
      url("Avenir-Black.woff2") format("woff2"),
      url("Avenir-Black.woff") format("woff"),
      url("Avenir-Black.ttf") format("truetype"),
      url("Avenir-Black.svg#Avenir-Black") format("svg");
    font-weight: 900;
    font-style: normal;
  }
`
