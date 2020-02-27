import React from "react"
import { Box } from "rebass"
import PropTypes from "prop-types"

const Container = ({ children, ...props }) => (
  <Box width="100%" maxWidth={1200} mx="auto" px={[2, 3]} {...props}>
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
