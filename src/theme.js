import theme from "@rebass/preset"

const customTheme = {
  ...theme,
  breakpoints: [320, 768, 1024, 1440],
  colors: {
    darkBlue: "#0C1D60",
    lightBlue: "#7BD5F5",
    gold: "#F7D663",
    white: "#FFF",
  },
  fonts: {
    body: "system-ui, sans-serif",
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
    lighter: 200,
    light: 300,
    normal: 400,
    bold: 700,
    bolder: 800,
  },
  lineHeights: {
    body: 1.333,
    heading: 1.33,
  },
  space: [
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

  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
    },
    caps: {
      textTransform: "uppercase",
    },
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 0,
      boxShadow: "card",
    },
    link: {},
    nav: {},
  },
  buttons: {
    primary: {},
    outline: {},
    secondary: {},
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
}

export default customTheme
