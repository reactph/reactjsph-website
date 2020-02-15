import theme from "@rebass/preset"
import { generate3dShadow } from "./utils"

const darkBlue = "#0C1D60"
const lightBlue = "#7BD5F5"
const gold = "#F7D663"
const white = "#FFF"

const customTheme = {
  ...theme,
  colors: {
    darkBlue,
    lightBlue,
    gold,
    white,
  },
  fonts: {
    body: "Avenir, Helvetica, Arial, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    "0.75rem",
    "1rem",
    "1.333rem",
    "1.777rem",
    "2.369rem",
    "3.157rem",
    "4.209rem",
    "5.61rem",
    "7.478rem",
    "9.969rem",
    "13.288rem",
    "17.713rem",
    "23.612rem",
    "31.475rem",
    "41.956rem",
    "55.927rem",
    "74.551rem",
    "99.376rem",
  ],
  fontWeights: {
    thin: 100,
    body: 400,
    hero: 600,
    heading: 900,
    bold: 900,
  },
  lineHeights: {
    body: 1.333,
    heading: 1,
  },
  space: [
    "0",
    "0.665rem",
    "1.33rem",
    "2.66rem",
    "3.99rem",
    "5.32rem",
    "6.65rem",
    "7.98rem",
    "9.31rem",
    "10.64rem",
  ],
  shadows: {
    main: "0 0 30px rgba(0, 0, 0, .2)",
  },
  variants: {
    nav: {
      mx: [0, 2],
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      color: "white",
      textDecoration: "none",
      transition: "400ms ease all",
      textTransform: "uppercase",

      ":first-child": { ml: 0 },

      ":last-child": { mr: 0 },

      ":after": {
        content: '""',
        display: "block",
        width: 0,
        height: 2,
        background: "gold",
        transition: "width 300ms",
      },

      ":hover": {
        color: "gold",

        ":after": {
          width: "100%",
        },
      },
    },
  },
  buttons: {
    primary: {
      position: "relative",
      fontSize: 1,
      fontFamily: "body",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "white",
      bg: "transparent",
      height: "auto",
      px: 2,
      py: 1,
      outline: 0,
      borderWidth: 3,
      borderColor: "white",
      borderStyle: "solid",
      borderRadius: 4,
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      boxShadow: generate3dShadow(5, white),
      cursor: "pointer",
      transition: "200ms border-color, 200ms background-color",
      ":focus, :hover": {
        borderColor: "lightBlue",
        backgroundColor: "transparent",
      },
      ":active": {
        boxShadow: generate3dShadow(2, white),
        transform: "translate(3px, 3px)",
      },
    },
    outline: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "darkblue",
      borderRadius: 4,
      bg: "white",
      color: "darkblue",
      fontFamily: "Avenir, Helvetica, Arial, sans-serif",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      p: 1,
      boxShadow: generate3dShadow(5, darkBlue),
      outline: 0,
      cursor: "pointer",
      transition: "250ms background-color",
      ":focus, :hover": {
        backgroundColor: "rgba(12, 29, 96, 0.1)",
      },
      ":active": {
        boxShadow: generate3dShadow(2, darkBlue),
        transform: "translate(3px, 3px)",
      },
    },
  },
}

export default customTheme
