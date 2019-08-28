import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Text } from "rebass"

const Header = ({ siteTitle }) => (
  <Box as="header" mb={2} bg="darkBlue">
    <Box m="0 auto" maxWidth={960} px={1} py={2}>
      <Text as="h1" fontSize={5} variant="heading">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
