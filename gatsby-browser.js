/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"

import "./src/reset.css"

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
