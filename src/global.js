import emotionReset from "emotion-reset"
import { css } from "@emotion/core"

export default css`
  ${emotionReset}

  /* Extend global styles after this line */

  @font-face {
    font-family: "Avenir";
    src: local("Avenir-Roman"), url("/fonts/Avenir-Roman.eot");
    src: local("Avenir-Roman"),
      url("/fonts/Avenir-Roman.eot?#iefix") format("embedded-opentype"),
      url("/fonts/Avenir-Roman.woff2") format("woff2"),
      url("/fonts/Avenir-Roman.woff") format("woff"),
      url("/fonts/Avenir-Roman.ttf") format("truetype"),
      url("/fonts/Avenir-Roman.svg#Avenir-Roman") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Avenir";
    src: local("Avenir-Black"), url("/fonts/Avenir-Black.eot");
    src: local("Avenir-Black"),
      url("/fonts/Avenir-Black.eot?#iefix") format("embedded-opentype"),
      url("/fonts/Avenir-Black.woff2") format("woff2"),
      url("/fonts/Avenir-Black.woff") format("woff"),
      url("/fonts/Avenir-Black.ttf") format("truetype"),
      url("/fonts/Avenir-Black.svg#Avenir-Black") format("svg");
    font-weight: 900;
    font-style: normal;
  }
`
