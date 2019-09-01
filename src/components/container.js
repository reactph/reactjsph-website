import React from "react"
import { Box } from "rebass"

const Container = ({ children }) => (
  <Box width="100%" maxWidth={1220} mx="auto">
    {children}
  </Box>
)

export default Container
