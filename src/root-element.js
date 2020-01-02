import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import PropTypes from "prop-types"
import { Box } from "rebass"

import theme from "./theme"
import globalStyles from "./global"

const RootElement = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Box variant="styles.root">{children}</Box>
    </ThemeProvider>
  </>
)

RootElement.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RootElement
