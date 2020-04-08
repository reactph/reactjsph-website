import emotionReset from "emotion-reset"
import { css } from "@emotion/core"

import {
  AvenirRomanEot,
  AvenirRomanWoff2,
  AvenirRomanWoff,
  AvenirRomanTtf,
  AvenirRomanSvg,
  AvenirBlackEot,
  AvenirBlackWoff2,
  AvenirBlackWoff,
  AvenirBlackTtf,
  AvenirBlackSvg,
} from "./fonts"

export default css`
  ${emotionReset}

  /* Extend global styles after this line */

  @font-face {
    font-family: "Avenir";
    src: local("Avenir-Roman"), url("${AvenirRomanEot}");
    src: local("Avenir-Roman"),
      url("${AvenirRomanEot}?#iefix") format("embedded-opentype"),
      url("${AvenirRomanWoff2}") format("woff2"),
      url("${AvenirRomanWoff}") format("woff"),
      url("${AvenirRomanTtf}") format("truetype"),
      url("${AvenirRomanSvg}") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Avenir";
    src: local("Avenir-Black"), url("${AvenirBlackEot}");
    src: local("Avenir-Black"),
      url("${AvenirBlackEot}?#iefix") format("embedded-opentype"),
      url("${AvenirBlackWoff2}") format("woff2"),
      url("${AvenirBlackWoff}") format("woff"),
      url("${AvenirBlackTtf}") format("truetype"),
      url("${AvenirBlackSvg}") format("svg");
    font-weight: 900;
    font-style: normal;
  }
`
