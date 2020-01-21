import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Image, Flex, Link } from "rebass"
import Logo from "../images/logo.svg"
import Container from "./container"

const menus = [
  { label: "Meetups", path: "/meetups" },
  { label: "Blog", path: "/blog" },
  { label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    }}
  >
    <Container>
      <Flex
        color="white"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <GatsbyLink to="/">
          <Image src={Logo} alt={siteTitle} width="12.5rem" />
        </GatsbyLink>
        <Box>
          {menus.map(menu => (
            <Link key={menu.label} variant="nav" href={menu.path}>
              {menu.label}
            </Link>
          ))}
        </Box>
      </Flex>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
